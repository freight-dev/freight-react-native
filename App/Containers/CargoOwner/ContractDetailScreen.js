import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ContractDetail } from '../../Components/ContractDetail'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'
import Style from './ContractDetailScreenStyle'

class ContractDetailScreen extends Component {
  render() {
    const contract = this.props.navigation.getParam('contract')

    if (!contract) {
      return null
    }

    return (
      <View style={Style.container}>
        <View style={Style.buttonContainer}>
          <Button
            title="Accept"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            title="Negotiate"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            title="Decline"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <ContractDetail data={contract} />
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
