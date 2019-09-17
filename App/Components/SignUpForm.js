import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { cargoService as CargoActions } from '../Services/CargoService'
import { COMPANY, CUSTOMER, INDIVIDUAL, TRANSPORTER, validators } from '../Helper/SignUpFormHelper'
import Styles from './SignUpFormStyle'
import { Images } from '../Theme'
import { OpenSansText } from './StyledText'
import Style from './CargoForm/CargoFormStyle'
import { authService as AuthActions } from '../Services/AuthService'


class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: CUSTOMER,
      owner: INDIVIDUAL,
    }
  }

  render() {
    return (
      <GiftedForm
        formName="signUp"
        openModal={(router) => {

        }}
        style={Style.form}
        showsVerticalScrollIndicator={false}
        clearOnClose={true} // delete the values of the form when unmounted
        defaults={{
          type: CUSTOMER,
          owner: INDIVIDUAL,
          // retypePassword: null,
          // weight: null,
          // weightUnit: null,
          // width: null,
          // length: null,
          // height: null,
          // bulkType: null,
        }}
        validators={validators}
      >
        {/* Phone */}
        <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
          <GiftedForm.TextInputWidget
            name="phone"
            title="+62"
            clearButtonMode="while-editing"
            placeholder="Enter phone number..."
            keyboardType='phone-pad'
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldTextWithTitle,
              textInputTitleInline: Styles.fieldTitleText,
            }}
            image={Images.phone}
          />
        </GiftedForm.GroupWidget>

        {/* Password */}
        <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
          <GiftedForm.TextInputWidget
            name="password"
            clearButtonMode="while-editing"
            placeholder="Enter password.."
            secureTextEntry={true}
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
            image={Images.password}
          />
        </GiftedForm.GroupWidget>

        {/* Retype Password */}
        <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
          <GiftedForm.TextInputWidget
            name="retypePassword"
            clearButtonMode="while-editing"
            placeholder="Retype password.."
            secureTextEntry={true}
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
            image={Images.password}
          />
        </GiftedForm.GroupWidget>

        {/* User Type */}
        <View style={Styles.typeContainer}>
          <View style={Styles.typeOuterLeftContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                GiftedFormManager.updateValue('signUp', 'owner', INDIVIDUAL)
                this.setState({owner: INDIVIDUAL})
              }}
              style={[
                Styles.typeInnerContainer,
                this.state.owner === INDIVIDUAL ? Styles.selected : null
              ]}>
              <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={Images.individual}/>
              </View>
              <View style={Styles.textDescriptionContainer}>
                <OpenSansText style={Styles.text}>Individu</OpenSansText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.typeOuterRightContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                GiftedFormManager.updateValue('signUp', 'owner', COMPANY)
                this.setState({owner: COMPANY})
              }}
              style={[
                Styles.typeInnerContainer,
                this.state.owner === COMPANY ? Styles.selected : null
              ]}>
              <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={Images.company}/>
              </View>
              <View style={Styles.textDescriptionContainer}>
                <OpenSansText style={Styles.text}>Perusahaan</OpenSansText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Company Name */}
        <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
          <GiftedForm.TextInputWidget
            name="companyName"
            clearButtonMode="while-editing"
            placeholder="Enter company name.."
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
          />
        </GiftedForm.GroupWidget>

        {/* Company Type */}
        <View style={Styles.typeContainer}>
          <View style={Styles.typeOuterLeftContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                GiftedFormManager.updateValue('signUp', 'type', CUSTOMER)
                this.setState({type: CUSTOMER})
              }}
              style={[
                Styles.typeInnerContainer,
                this.state.type === CUSTOMER ? Styles.selected : null
              ]}>
              <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={Images.customer}/>
              </View>
              <View style={Styles.textDescriptionContainer}>
                <OpenSansText style={Styles.text}>Pemilik Barang</OpenSansText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.typeOuterRightContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                GiftedFormManager.updateValue('signUp', 'type', TRANSPORTER)
                this.setState({type: TRANSPORTER})
              }}
              style={[
                Styles.typeInnerContainer,
                this.state.type === TRANSPORTER ? Styles.selected : null
              ]}>
              <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={Images.transporter}/>
              </View>
              <View style={Styles.textDescriptionContainer}>
                <OpenSansText style={Styles.text}>Pemilik Kapal</OpenSansText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <GiftedForm.ErrorsWidget/>

        <GiftedForm.SubmitWidget
          title="Sign Up"
          widgetStyles={{
            submitButton: Styles.signUpButton,
            textSubmitButton: Styles.signUpText,
          }}
          onSubmit={(
            isValid,
            values,
            validationResults,
            postSubmit = null,
            modalNavigator = null
          ) => {
            if (isValid === true) {
              const payload = {
                phone: '62' + values.phone,
                password: values.password,
                companyName: values.owner === COMPANY ? values.companyName : null,
                type: values.type,
              }
              console.log(JSON.stringify(payload))

              this.props.signUp(payload)
              if (!this.props.signUpIsLoading && !this.props.signUpErrorMessage) {
                postSubmit()
                GiftedFormManager.reset('signUp')
                this.props.navigation.navigate('CargoOwner')
              } else {
                postSubmit(this.props.signUpErrorMessage)
              }
            }
          }}
        />

      </GiftedForm>
    )
  }
}

SignUpForm.propTypes = {
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  signUpIsLoading: state.auth.signUpIsLoading,
  signUpErrorMessage: state.auth.signUpErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (payload) => {
    return dispatch({
      type: AuthActions.signUp(payload),
      payload: payload,
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
