import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ContractDetail } from '../../Components/ContractDetail'
import { connect } from 'react-redux'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Style from './ContractDetailScreenStyle'
import { OpenSansBoldText, OpenSansText } from '../../Components/StyledText'

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
          <TouchableOpacity style={[Style.decline, Style.button]}>
            <OpenSansText style={Style.buttonText}>Decline</OpenSansText>
          </TouchableOpacity>
          <TouchableOpacity style={[Style.negotiate, Style.button]}>
            <OpenSansText style={Style.buttonText}>Negotiate</OpenSansText>
          </TouchableOpacity>
          <TouchableOpacity style={[Style.accept, Style.button]}>
            <OpenSansText style={Style.buttonText}>Accept</OpenSansText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ContractDetailScreen.propTypes = {
  navigation: PropTypes.func,
  contracts: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractDetailScreen)
