import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import ConfigActions from 'App/Stores/Config/Actions'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    // this.props.startup()
    this.props.getConfig()

    // When those operations are finished we redirect to the main screen
    if (!this.props.configIsLoading && this.props.configErrorMessage === null) {
      NavigationService.navigateAndReset('MainScreen')
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
  // startup: PropTypes.func,
  getConfig: PropTypes.func,
  configIsLoading: PropTypes.bool,
  configErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  configIsLoading: state.config.configIsLoading,
  configErrorMessage: state.config.configErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  getConfig: () => dispatch(ConfigActions.getConfig()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
