import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { connect } from 'react-redux'

class InquiryActiveScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    // this.props.startup()
    this.props.getActiveCargos()
  }

  render() {
    return (
      <View>
        <Text>This is the history page</Text>
      </View>
    )
  }
}

InquiryActiveScreen.propTypes = {
  getActiveCargos: PropTypes.func,
}

const mapStateToProps = (state) => ({
  activeCargos: state.cargo.activeCargos,
})

const mapDispatchToProps = (dispatch) => ({
  getActiveCargos: () => dispatch(CargoActions.getActiveCargos()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryActiveScreen)
