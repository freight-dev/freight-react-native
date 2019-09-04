import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ContractDetail } from '../../Components/ContractDetail'
import { connect } from 'react-redux'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Style from './ContractDetailScreenStyle'
import { OpenSansBoldText, OpenSansText } from '../../Components/StyledText'
import ContractActions from '../../Stores/Contract/Actions'
import { CUSTOMER_ACCEPTED, CUSTOMER_DECLINED, CUSTOMER_NEGOTIATE } from '../../Helper/ContractHelper'

class ContractDetailScreen extends Component {
  render() {
    const contract = this.props.navigation.getParam('contract')
    const cargo = this.props.navigation.getParam('cargo')

    if (contract === undefined || cargo === undefined) {
      return null
    }

    return (
      <View style={Style.container}>
        <ContractDetail contract={contract} cargo={cargo}/>
        <View style={Style.buttonContainer}>
          <TouchableOpacity
            style={[Style.decline, Style.button]}
            onPress={() => {
              const payload = {
                contractId: contract.id,
                status: CUSTOMER_DECLINED,
              }
              this.props.updateContractStatus(payload)
            }}
          >
            <OpenSansText style={Style.buttonText}>Decline</OpenSansText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Style.negotiate, Style.button]}
            onPress={() => {
              const payload = {
                contractId: contract.id,
                status: CUSTOMER_NEGOTIATE,
              }
              this.props.updateContractStatus(payload)
            }}
          >
            <OpenSansText style={Style.buttonText}>Negotiate</OpenSansText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Style.accept, Style.button]}
            onPress={() => {
              const payload = {
                contractId: contract.id,
                status: CUSTOMER_ACCEPTED,
              }
              this.props.updateContractStatus(payload)
            }}
          >
            <OpenSansText style={Style.buttonText}>Accept</OpenSansText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ContractDetailScreen.propTypes = {
  navigation: PropTypes.func,
  cargoContract: PropTypes.object,
  cargoContractIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  cargoContract: state.contract.cargoContract,
  cargoContractIsLoading: state.contract.cargoContractIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  updateContractStatus: (param) => dispatch(ContractActions.updateContractStatus(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractDetailScreen)
