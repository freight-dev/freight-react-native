import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ContractDetail } from '../../Components/ContractDetail'
import { connect } from 'react-redux'

class ContractDetailScreen extends Component {
  render() {
    const contract = this.props.navigation.getParam('contract')

    if (!contract) {
      return null
    }

    return <ContractDetail data={contract} />
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
