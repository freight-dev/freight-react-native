import React from 'react'
import { View, ActivityIndicator, StatusBar, TouchableOpacity, StyleSheet, Text, Keyboard, Animated, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Styles from '../Auth/SignUpScreenStyle'
import SearchForm from '../../Components/CargoForm/CargoForm'
import { OpenSansLightText, OpenSansText } from '../../Components/StyledText'
import Colors from '../../Theme/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { authService as AuthActions } from '../../Services/AuthService'
import { cargoService as CargoActions } from '../../Services/CargoService'

const payload = {
  "phone": 4086919384,
  "password": "tos",
  "type": "CUSTOMER",
  "companyName": "Toshiki's company name"
}

class SignUpScreen extends React.Component {
  // render() {
  //   return (
  //     <View style={Style.container}>
  //       <StatusBar backgroundColor='white' barStyle="dark-content" />
  //       {this.props.configIsLoading ? (
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       ) : (
  //         <SearchForm navigation={this.props.navigation} />
  //       )}
  //     </View>
  //   )
  // }

  componentDidMount() {

  }

  _signUp() {
    authenticate(this.state.email, this.state.password)
      .then((responseJson) => {
        storeToken(responseJson.token);
        this.props.navigation.navigate('Main');
      })
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <View style={Styles.signUpContainer}>
          <View style={Styles.textContainer}>
            <View style={Styles.textBorderContainer}>
              <View style={Styles.iconContainer}>
                <FontAwesome name='phone' size={30} style={Styles.icon}/>
              </View>
              <TextInput
                style={Styles.textInput}
                placeholder='phone'
                onChangeText={text => {
                  // this.setState({email: text});
                }}
                autoCorrect={false}
                // value={this.state.email}
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
                onChangeText={text => {
                  // this.setState({password: text});
                }}
                // value={this.state.password}
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
                placeholder='retype password'
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text => {
                  // this.setState({password: text});
                }}
                // value={this.state.password}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              // disabled={this.state.newUserButtonDisabled}
              onPress={() => { this.props.navigation.navigate('Type') }} >
              <OpenSansLightText style={{fontSize: 16, color: 'white'}}>Sign up!</OpenSansLightText>
            </TouchableOpacity>
          </View>
        </View>
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
  signUp: (payload) => {
    return dispatch({
      type: AuthActions.signUp(payload),
      payload: payload
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)
