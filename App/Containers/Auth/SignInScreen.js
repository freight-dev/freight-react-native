import React, { Component } from 'react'
import { View, ActivityIndicator, StatusBar, TouchableOpacity, StyleSheet, Text, Keyboard, Animated, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Styles from '../Auth/SignInScreenStyle'
import SearchForm from '../../Components/CargoForm/CargoForm'
import { OpenSansLightText, OpenSansText } from '../../Components/StyledText'
import Colors from '../../Theme/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { authService as AuthActions } from '../../Services/AuthService'
import NavigationService from '../../Services/NavigationService'


class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: '',
    }
  }

  render() {
    return (
      <View
        style={Styles.container}
      >

      {/*<View style={Styles.container}>*/}
        <StatusBar hidden={true} />
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Freight</Text>
        </View>
        <View style={Styles.tagLine}>
          <Text style={Styles.tagLineText}>This is the tagline</Text>
        </View>

        <View style={Styles.signInContainer}>
          <View style={Styles.textContainer}>
            <View style={Styles.textBorderContainer}>
              <View style={Styles.iconContainer}>
                <FontAwesome name='phone' size={30} style={Styles.icon}/>
              </View>
              <View style={Styles.textInputPrefixContainer}>
                <OpenSansText style={Styles.prefixText}>+62</OpenSansText>
              </View>
              <TextInput
                style={Styles.textInput}
                placeholder='phone'
                onChangeText={phone => {
                  this.setState({phone: phone});
                }}
                autoCorrect={false}
                value={this.state.phone}
              />
            </View>
          </View>
          <View style={Styles.textContainer}>
            <View style={Styles.textBorderContainer}>
              <View style={Styles.iconContainer}>
                <FontAwesome name='lock' size={30} style={Styles.icon}/>
              </View>
              <TextInput
                style={Styles.textInput}
                placeholder='password'
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={password => {
                  this.setState({password: password});
                }}
                value={this.state.password}
              />
            </View>
          </View>

          <View>
            <OpenSansLightText style={Styles.forgotPasswordText}>Forgot password</OpenSansLightText>
          </View>

          <View style={Styles.textContainer}>
            <TouchableOpacity
              style={Styles.signInButtonContainer}
              activeOpacity={0.8}
              disabled={this.state.phone === '' || this.state.password === ''}
              onPress={() => {
                const payload = {
                  phone: '62' + this.state.phone,
                  password: this.state.password,
                }
                this.props.signIn(payload)
                if (!this.props.signInIsLoading && this.props.signedIn) {
                  NavigationService.navigateAndReset('CargoOwner')
                }
              }}>
              <OpenSansText style={{fontSize: 18, color: 'white'}}>Sign in</OpenSansText>
            </TouchableOpacity>
          </View>
          <View>
            <View style={Styles.signUpContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { this.props.navigation.navigate('SignUp') }} >
                <OpenSansLightText style={{fontSize: 16, color: 'white'}}>Sign up!</OpenSansLightText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

SignInScreen.propTypes = {

  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn,
  signInIsLoading: state.auth.signInIsLoading,
  signInErrorMessage: state.auth.signInErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (payload) => {
    return dispatch({
      type: AuthActions.signIn(payload),
      payload: payload,
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
