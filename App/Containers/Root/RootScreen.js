import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import ConfigActions from 'App/Stores/Config/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    // this.props.startup()
    this.props.getConfig()
    this.props.isSignedIn()

    // When those operations are finished we redirect to the main screen
    if (!this.props.configIsLoading && this.props.configErrorMessage === null && !this.props.isSignedInIsLoading) {
      console.log("isSignedInIsLoading inside Root Screen: " + this.props.isSignedInIsLoading)
      console.log("signedIn inside Root Screen: " + this.props.signedIn)
      if (this.props.signedIn) {
        NavigationService.navigateAndReset('CargoOwner')
      } else {
        NavigationService.navigateAndReset('SignIn')
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  signedIn: PropTypes.bool,
  isSignedIn: PropTypes.func,
  isSignedInIsLoading: PropTypes.bool,
  getConfig: PropTypes.func,
  configIsLoading: PropTypes.bool,
  configErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn,
  isSignedInIsLoading: state.auth.isSignedInIsLoading,
  configIsLoading: state.config.configIsLoading,
  configErrorMessage: state.config.configErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  getConfig: () => dispatch(ConfigActions.getConfig()),
  isSignedIn: () => dispatch(AuthActions.isSignedIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
