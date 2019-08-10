import React, { Component } from 'react'
import { FlatList, View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import ContractActions from '../../Stores/Contract/Actions'
import { ContractCard } from '../../Components/ContractCard'
import { connect } from 'react-redux'
import Style from './CargoContractScreenStyle'
import Colors from '../../Theme/Colors'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from '../../Components/StyledText'
import moment from 'moment'
import * as _ from 'lodash'
import {
  ACTION_REQUIRED,
  ALL, CUSTOMER_ACCEPTED,
  DECLINED,
  EXPIRED, mapContractStatus,
  WAITING_REPLY,
} from '../../Helper/ContractHelper'

class CargoContractScreen extends Component {
  componentDidMount() {
    this.props.getContracts({
      cargoId: this.props.navigation.getParam('cargo').id,
      start: 0,
      limit: 20,
    })
    this.props.setContractsStatusSearch(ALL)
  }

  _keyExtractor = (item) => item.id

  _renderItem = (contract, cargo) => (
    <ContractCard contract={contract} cargo={cargo} navigation={this.props.navigation} />
  );

  render() {
    const cargo = this.props.navigation.getParam('cargo')
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
        <View style={Style.cargo}>
          <View style={Style.cargoOriginDestination}>
            <View style={Style.cargoOriginDestinationText}>
              <View style={Style.cargoInfoField}>
                <OpenSansLightText style={{color: 'white'}}>Origin</OpenSansLightText>
                <OpenSansBoldText style={{color: 'white'}}>{cargo.origin.mainName}</OpenSansBoldText>
                <OpenSansItalicText style={{color: 'white'}}>{cargo.origin.secondaryName}</OpenSansItalicText>
              </View>
              <View style={Style.cargoInfoField}>
                <OpenSansLightText style={{color: 'white'}}>Destination</OpenSansLightText>
                <OpenSansBoldText style={{color: 'white'}}>{cargo.destination.mainName}</OpenSansBoldText>
                <OpenSansItalicText style={{color: 'white'}}>{cargo.destination.secondaryName}</OpenSansItalicText>
              </View>
            </View>
          </View>
          <View>{renderCargoInformation(cargo)}</View>
        </View>

        <View style={Style.contracts}>
          <View style={Style.statusSearchContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Style.statusSearchBar}>
              { statusSearchTab(this.props, ALL) }
              { statusSearchTab(this.props, ACTION_REQUIRED) }
              { statusSearchTab(this.props, WAITING_REPLY) }
              { statusSearchTab(this.props, DECLINED) }
              { statusSearchTab(this.props, EXPIRED) }
            </ScrollView>
          </View>

          <FlatList
            data={_filterContract(this.props.contractsStatusSearch, this.props.contracts)}
            keyExtractor={this._keyExtractor}
            renderItem={(contract) => this._renderItem(contract, cargo)}
            onEndReached={() => this.props.getContracts({
              cargoId: this.props.navigation.getParam('cargo').id,
              start: this.props.contractsStart,
              limit: 20,
            })}
            onEndReachedThreshold={0.5}
            onRefresh={() => this.props.getContracts({
              cargoId: this.props.navigation.getParam('cargo').id,
              start: this.props.contractsStart,
              limit: 20,
            })}
            refreshing={this.props.contractsIsLoading}
            ref={ref => this.flatList = ref}
            onContentSizeChange={() => {
              if (this.contracts) this.flatList.scrollToIndex({ animated: true, index: 0 });
            }}
            onLayout={() => {
              if (this.contracts) this.flatList.scrollToIndex({ animated: true, index: 0 });
            }}
          />
        </View>
      </View>
    )
  }
}

const _filterContract = (contractsStatusSearch, contracts) => {
  // We dont want to return accepted contract for ALL
  // This should not happened because ACCEPTED contract should have RESERVED cargo
  if (contractsStatusSearch === ALL) {
    return _.filter(contracts, function(contract) {
      return contract.status !== CUSTOMER_ACCEPTED;
    });
  }
  return _.filter(contracts, function(contract) {
    return contractsStatusSearch.includes(mapContractStatus(contract.status));
  });
}

const statusSearchTab = (props, statusSearch) => {
  return (
    <TouchableOpacity style={[Style.statusSearch, _.isEqual(statusSearch, props.contractsStatusSearch) ? Style.statusSearchSelected : null]}
                      onPress={() => props.setContractsStatusSearch(statusSearch)}>
      <OpenSansText style={Style.statusSearchText, _.isEqual(statusSearch, props.contractsStatusSearch) ? Style.statusSearchTextSelected : null}>
        {statusSearch}
      </OpenSansText>
    </TouchableOpacity>
  )
}

const renderCargoInformation = (cargo) => {
  switch (cargo.cargoType.type) {
    case 'FCL':
      return FCL(cargo)
    case 'LCL':
      return LCL(cargo)
    case 'Bulk':
      return Bulk(cargo)
    default:
      return null
  }
}

const FCL = (cargo) => {
  return <Text>{cargo.containerType.displayName}</Text>
}

const LCL = (cargo) => {
  return <Text>{cargo.quantity}</Text>
}

const Bulk = (cargo) => {
  return (
    <View style={Style.cargoInfo}>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText style={{color: 'white'}}>Departure</OpenSansLightText>
        <OpenSansBoldText style={{color: 'white'}}>{moment(cargo.departure).format('D MMM YYYY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText style={{color: 'white'}}>Type</OpenSansLightText>
        <OpenSansBoldText style={{color: 'white'}}>{cargo.bulkType.displayName}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansText style={{color: 'white'}}>{cargo.weight} {cargo.weightUnit.toLowerCase()}</OpenSansText>
        <OpenSansText style={{color: 'white'}}>{cargo.volume} {cargo.volumeUnit.toLowerCase()}</OpenSansText>
      </View>
    </View>
  )
}

CargoContractScreen.propTypes = {
  getContracts: PropTypes.func,
  contracts: PropTypes.array,
  contractsIsLoading: PropTypes.bool,
  contractsStart: PropTypes.number,
  setContractsStatusSearch: PropTypes.func,
  contractsStatusSearch: PropTypes.array,
}

const mapStateToProps = (state) => ({
  contracts: state.contract.contracts,
  contractsIsLoading: state.contract.contractsIsLoading,
  contractsStart: state.contract.contractsStart,
  contractsStatusSearch: state.contract.contractsStatusSearch,
})

const mapDispatchToProps = (dispatch) => ({
  getContracts: (param) => dispatch(ContractActions.getContracts(param)),
  setContractsStatusSearch: (status) => dispatch(ContractActions.setContractsStatusSearch(status)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoContractScreen)
