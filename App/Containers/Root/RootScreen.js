import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import ConfigActions from 'App/Stores/Config/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import { PropTypes } from 'prop-types'
import { CUSTOMER, TRANSPORTER } from '../../Helper/AuthHelper'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    // this.props.startup()
    this.props.getConfig()
    this.props.isSignedIn()



    // When those operations are finished we redirect to the main screen
    if (!this.props.configIsLoading && !this.props.configErrorMessage) {
      if (!!this.props.token && !!this.props.type) {
        if (this.props.type === CUSTOMER) {
          NavigationService.navigateAndReset('CargoOwner')
        } else if (this.props.type === TRANSPORTER) {
          NavigationService.navigateAndReset('ShipOwner')
        } else {
          console.error('auth.type is not recognized')
          NavigationService.navigateAndReset('SignIn')
        }
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
  token: PropTypes.string,
  isSignedIn: PropTypes.func,
  isSignedInIsLoading: PropTypes.bool,
  isSignedInErrorMessage: PropTypes.string,
  getConfig: PropTypes.func,
  configIsLoading: PropTypes.bool,
  configErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  type: state.auth.type,
  isSignedInIsLoading: state.auth.isSignedInIsLoading,
  isSignedInErrorMessage: state.auth.isSignedInErrorMessage,
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
