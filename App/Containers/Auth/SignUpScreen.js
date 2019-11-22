import React from 'react'
import { View, ActivityIndicator, StatusBar, TouchableOpacity, StyleSheet, Text, Keyboard, Animated, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { authService as AuthActions } from '../../Services/AuthService'
import SignUpForm from '../../Components/SignUpForm'
import Styles from './SignUpScreenStyle'

class SignUpScreen extends React.Component {

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content"/>
        <SignUpForm navigation={this.props.navigation}/>
      </View>
    );
  }
}

SignUpScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)
