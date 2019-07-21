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

class CargoContractScreen extends Component {
  constructor() {
    super()
    this.state = { statusSearch: '' }
  }

  componentDidMount() {
    this.props.getContracts({ cargoId: this.props.navigation.getParam('cargo').id})
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({item}) => (
    <ContractCard data={item} navigation={this.props.navigation} />
  );

  render() {
    const cargo = this.props.navigation.getParam('cargo')
    if (this.props.contractsIsLoading) {
      return null
    }

    return (
      <View style={Style.container}>
        <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
        <View style={Style.cargo}>
          <View style={Style.cargoOriginDestination}>
            <View style={Style.cargoOriginDestinationText}>
              <View style={Style.cargoInfoField}>
                <OpenSansLightText style={{color: 'white'}}>Origin</OpenSansLightText>
                <OpenSansBoldText style={{color: 'white'}}>Tanjung Priok</OpenSansBoldText>
                <OpenSansItalicText style={{color: 'white'}}>Jakarta, DKI Jakarta</OpenSansItalicText>
              </View>
              <View style={Style.cargoInfoField}>
                <OpenSansLightText style={{color: 'white'}}>Destination</OpenSansLightText>
                <OpenSansBoldText style={{color: 'white'}}>Semayang</OpenSansBoldText>
                <OpenSansItalicText style={{color: 'white'}}>Balikpapan, Kalimantan Timur</OpenSansItalicText>
              </View>
            </View>
          </View>
          <View>{renderCargoInformation(cargo)}</View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Style.statusSearchBar}>
          { statusSearchTab(() => this.setState({ statusSearch: '' }),
            this.state.statusSearch,
            '',
            'All') }
          { statusSearchTab(() => this.setState({ statusSearch: 'TRANSPORTER_OFFERED' }),
            this.state.statusSearch,
            'TRANSPORTER_OFFERED',
            'Action Required') }
          { statusSearchTab(() => this.setState({ statusSearch: 'CUSTOMER_NEGOTIATE' }),
            this.state.statusSearch,
            'CUSTOMER_NEGOTIATE',
            'Waiting Reply') }
          { statusSearchTab(() => this.setState({ statusSearch: 'CUSTOMER_ACCEPTED' }),
            this.state.statusSearch,
            'CUSTOMER_ACCEPTED',
            'Accepted') }
          { statusSearchTab(() => this.setState({ statusSearch: 'CUSTOMER_DECLINED' }),
            this.state.statusSearch,
            'CUSTOMER_DECLINED',
            'Declined') }
          { statusSearchTab(() => this.setState({ statusSearch: 'CUSTOMER_EXPIRED,TRANSPORTER_EXPIRED' }),
            this.state.statusSearch,
            'CUSTOMER_EXPIRED,TRANSPORTER_EXPIRED',
            'Expired') }
        </ScrollView>

        <FlatList
          style={Style.container}
          data={this.props.contracts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const statusSearchTab = (action, statusSearchCurState, statusSearch, displayText) => {
  return (
    <TouchableOpacity style={[Style.statusSearch, statusSearchCurState === statusSearch ? Style.statusSearchSelected : null]}
                      onPress={action}>
      <OpenSansText style={Style.statusSearchText, statusSearchCurState === statusSearch ? Style.statusSearchTextSelected : null}>
        {displayText}
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
}

const mapStateToProps = (state) => ({
  contracts: state.contract.contracts,
  contractsIsLoading: state.contract.contractsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getContracts: (param) => dispatch(ContractActions.getContracts(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoContractScreen)
