import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DatePicker from 'react-native-datepicker'

import CargoActions from 'App/Stores/Cargo/Actions'
import { FCL } from './FclForm'
import { LCL } from './LclForm'
import { Bulk } from './BulkForm'
import { validators } from '../../Helper/CargoFormHelper'
import Style from './CargoFormStyle'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { GooglePlacesInput } from './GooglePlacesInput'
import FormStyles from './FormStyle'

const location = {
  ORIGIN: 'origin',
  DESTINATION: 'destination',
}

class CargoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cargoTypeId: 2,
      departure: null,
    }
  }

  render() {
    return (
      <GiftedForm
        formName="cargo"
        openModal={(router) => {
          this.props.navigation.navigate('Modal', {
            renderContent: router.renderScene,
            onClose: router.onClose,
            getTitle: router.getTitle,
          })
        }}
        style={Style.form}
        showsVerticalScrollIndicator={false}
        clearOnClose={true} // delete the values of the form when unmounted
        defaults={{
          cargoTypeId: 2,
          // containerTypeId: '',
          // quantity: null,
          // weight: null,
          // weightUnit: null,
          // width: null,
          // length: null,
          // height: null,
          // bulkType: null,
        }}
        validators={validators}
      >
        {/* Origin */}
        <GiftedForm.GroupWidget style={FormStyles.fieldGroupContainer}>
          <GiftedForm.GroupWidget style={FormStyles.fieldTitleContainer}>
            <Text style={FormStyles.fieldTitleText}>Origin</Text>
          </GiftedForm.GroupWidget>
          <GiftedForm.ModalWidget
            displayValue="originMainName"
            title="Origin"
            widgetStyles={{
              rowContainer: FormStyles.fieldUnit,
              alignRight: FormStyles.fieldUnitTextContainer,
              modalTitle: FormStyles.spacer,
              modalValue: FormStyles.fieldUnitText,
            }}>
            <GooglePlacesInput location={location.ORIGIN}/>
          </GiftedForm.ModalWidget>
        </GiftedForm.GroupWidget>

        {/* Destination */}
        <GiftedForm.GroupWidget style={FormStyles.fieldGroupContainer}>
          <GiftedForm.GroupWidget style={FormStyles.fieldTitleContainer}>
            <Text style={FormStyles.fieldTitleText}>Destination</Text>
          </GiftedForm.GroupWidget>
          <GiftedForm.ModalWidget
            displayValue="destinationMainName"
            title="Destination"
            widgetStyles={{
              rowContainer: FormStyles.fieldUnit,
              alignRight: FormStyles.fieldUnitTextContainer,
              modalTitle: FormStyles.spacer,
              modalValue: FormStyles.fieldUnitText,
            }}>
            <GooglePlacesInput location={location.DESTINATION}/>
          </GiftedForm.ModalWidget>
        </GiftedForm.GroupWidget>

        {/* Departure */}
        <GiftedForm.GroupWidget style={FormStyles.fieldGroupContainer}>
          <GiftedForm.GroupWidget style={FormStyles.fieldTitleContainer}>
            <Text style={FormStyles.fieldTitleText}>Departure Date</Text>
          </GiftedForm.GroupWidget>
          <View style={FormStyles.fieldDataGroupContainer}>
            <DatePicker
              style={FormStyles.field}
              date={this.state.departure}
              mode="date"
              placeholder="Select departure date.."
              format="YYYY-MM-DD"
              minDate={moment(new Date())
                .add(1, 'days')
                .toDate()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{dateInput: Style.datePickerText, dateText: Style.dateText, placeholderText: Style.placeHolderDateText}}
              onDateChange={(date) => {
                GiftedFormManager.updateValue('cargo', 'departure', date)
                this.setState({ ...this.state, departure: date })
              }}
            />
          </View>
        </GiftedForm.GroupWidget>

        <SegmentedControlTab
          tabsContainerStyle={Style.tabsContainerStyle}
          tabStyle={Style.tabStyle}
          tabTextStyle={Style.tabsTextStyle}
          activeTabStyle={Style.activeTabStyle}
          activeTabTextStyle={Style.activeTabTextStyle}
          borderRadius={0}
          values={this.props.cargoTypes.map((cargoType) => cargoType.displayName)}
          selectedIndex={this.state.cargoTypeId}
          onTabPress={(index) => {
            // TODO: Enable FCL and LCL
            // GiftedFormManager.updateValue('cargo', 'cargoTypeId', index)
            // this.setState({ ...this.state, cargoTypeId: index })
          }}
        />

{/*        TODO: Enable FCL and LCL*/}
        {/*{this.state.cargoTypeId === 0 && FCL(this.props.containerTypes)}*/}
        {/*{this.state.cargoTypeId === 1 && LCL(this.props.weightUnits, this.props.dimensionUnits)}*/}
        {this.state.cargoTypeId === 2 && Bulk(this.props.weightUnits, this.props.volumeUnits, this.props.bulkTypes)}

        <GiftedForm.ErrorsWidget/>
        {/*<GiftedForm.ErrorsWidget widgetStyles={{*/}
        {/*  errorContainer: Style.errorContainer,*/}
        {/*  errorText: Style.errorText,*/}
        {/*}}/>*/}

        <GiftedForm.SubmitWidget
          title="Inquire"
          widgetStyles={{
            submitButton: Style.submitButton,
            textSubmitButton: Style.textSubmitButton,
          }}
          onSubmit={(
            isValid,
            values,
            validationResults,
            postSubmit = null,
            modalNavigator = null
          ) => {
            if (isValid === true) {
              /* Implement the request to your server using values variable
               ** then you can do:
               ** postSubmit(); // disable the loader
               ** postSubmit(["An error occurred, please try again"]); // disable the loader and display an error message
               ** postSubmit(["Username already taken", "Email already taken"]); // disable the loader and display an error message
               ** GiftedFormManager.reset("signupForm"); // clear the states of the form manually. "signupForm" is the formName used
               */
              const payload = {
                origin: {
                  externalId: values.originExternalId,
                  mainName: values.originMainName,
                  secondaryName: values.originSecondaryName,
                  lat: values.originLat,
                  lon: values.originLon,
                  route: values.originRoute,
                  locality: values.originLocality,
                  village: values.originVillage,
                  subdistrict: values.originSubdistrict,
                  city: values.originCity,
                  province: values.originProvince,
                  country: values.originCountry,
                },
                destination: {
                  externalId: values.destinationExternalId,
                  mainName: values.destinationMainName,
                  secondaryName: values.destinationSecondaryName,
                  lat: values.destinationLat,
                  lon: values.destinationLon,
                  route: values.destinationRoute,
                  locality: values.destinationLocality,
                  village: values.destinationVillage,
                  subdistrict: values.destinationSubdistrict,
                  city: values.destinationCity,
                  province: values.destinationProvince,
                  country: values.destinationCountry,
                },
                departure: values.departure,
                cargoTypeId: values.cargoTypeId + 1, // because index starts at 0, TODO: remove this hack
                quantity: parseInt(values.quantity),
                volume: parseInt(values.volume),
                volumeUnit: values.volumeUnit === undefined ? 'NOT_USED' : values.volumeUnit[0],
                weight: parseInt(values.weight),
                weightUnit: values.weightUnit === undefined ? 'NOT_USED' : values.weightUnit[0],
                length: parseInt(values.length),
                width: parseInt(values.width),
                height: parseInt(values.height),
                dimensionUnit: values.dimensionUnit === undefined ? 'NOT_USED' : values.dimensionUnit[0],
                containerTypeId: values.containerTypeId !== undefined ? parseInt(values.containerTypeId[0]) : null,
                bulkTypeId: values.bulkTypeId !== undefined ? parseInt(values.bulkTypeId[0]) : null,
              }
              this.props.postCargo(payload)
              if (!this.props.cargoIsLoading && !this.props.cargoErrorMessage) {
                postSubmit()
                GiftedFormManager.reset('cargo')
                this.props.navigation.navigate('InquiryScreen')
              } else {
                postSubmit(this.props.cargoErrorMessage)
              }
            }
          }}
        />

        {/* <GiftedForm.NoticeWidget title="By signing up, you agree to the Terms of Service and Privacy Policity." /> */}

        {/*<GiftedForm.HiddenWidget name="tos" value={true} />*/}
      </GiftedForm>
    )
  }
}

CargoForm.propTypes = {
  navigation: PropTypes.object,
  postCargo: PropTypes.func,
  cargo: PropTypes.object,
  cargoIsLoading: PropTypes.bool,
  cargoErrorMessage: PropTypes.string,
  containerTypes: PropTypes.array,
  bulkTypes: PropTypes.array,
  cargoTypes: PropTypes.array,
  weightUnits: PropTypes.array,
  volumeUnits: PropTypes.array,
  dimensionUnits: PropTypes.array,
}

const mapStateToProps = (state) => ({
  containerTypes: state.config.containerTypes,
  bulkTypes: state.config.bulkTypes,
  cargoTypes: state.config.cargoTypes,
  weightUnits: state.config.weightUnits,
  volumeUnits: state.config.volumeUnits,
  dimensionUnits: state.config.dimensionUnits,
  cargo: state.cargo.cargo,
  cargoIsLoading: state.cargo.cargoIsLoading,
  cargoErrorMessage: state.cargo.cargoErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  postCargo: (payload) => {
    return dispatch(CargoActions.postCargo(payload))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoForm)
