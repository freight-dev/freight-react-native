import React from 'react'
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


class SignInScreen extends React.Component {
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

  _signIn() {
    authenticate(this.state.email, this.state.password)
      .then((responseJson) => {
        storeToken(responseJson.token);
        this.props.navigation.navigate('Main');
      })
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
                <MaterialIcons name='mail' size={30} style={Styles.icon}/>
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

          <View>
            <OpenSansLightText style={Styles.forgotPasswordText}>Forgot password</OpenSansLightText>
          </View>

          <View style={Styles.textContainer}>
            <TouchableOpacity
              style={Styles.signInButtonContainer}
              activeOpacity={0.8}
              // disabled={this.state.email == '' || this.state.password == ''}
              onPress={() => this._signIn()} >
              <OpenSansText style={{fontSize: 18, color: 'white'}}>Sign in</OpenSansText>
            </TouchableOpacity>
          </View>
          <View>
            <View style={Styles.signUpContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                // disabled={this.state.newUserButtonDisabled}
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
  containerTypes: PropTypes.array,
  bulkTypes: PropTypes.array,
  cargoTypes: PropTypes.array,
  configIsLoading: PropTypes.bool,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  containerTypes: state.config.containerTypes,
  bulkTypes: state.config.bulkTypes,
  cargoTypes: state.config.cargoTypes,
  configIsLoading: state.config.configIsLoading,
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  // getPort: () => dispatch(PortActions.getPort()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
