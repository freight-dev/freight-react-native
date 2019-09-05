import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ContractDetail } from '../../Components/ContractDetail'
import { connect } from 'react-redux'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Style from './ContractDetailScreenStyle'
import { OpenSansBoldText, OpenSansText } from '../../Components/StyledText'
import ContractActions from '../../Stores/Contract/Actions'

class ShipmentContractDetailScreen extends Component {
  componentDidMount() {
    this.props.getContracts({
      cargoId: this.props.navigation.getParam('cargo').id,
      start: 0,
      limit: 1,
    })
  }

  render() {
    const contract = this.props.contracts[0]
    const cargo = this.props.navigation.getParam('cargo')

    return (
      <View style={Style.container}>
        <View style={Style.header}>
          <OpenSansBoldText style={Style.headerTitle}>#{contract.id}</OpenSansBoldText>
        </View>
        <ContractDetail contract={contract} cargo={cargo}/>
      </View>
    )
  }
}

ShipmentContractDetailScreen.propTypes = {
  navigation: PropTypes.object,
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
)(ShipmentContractDetailScreen)
