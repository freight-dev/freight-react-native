import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DatePicker from 'react-native-datepicker'

import { cargoService as CargoActions } from '../../Services/CargoService'
import { FCL } from './FclForm'
import { LCL } from './LclForm'
import { Bulk } from './BulkForm'
import { validators } from '../../Helper/CargoFormHelper'
import Style from './CargoFormStyle'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { GooglePlacesInput } from './GooglePlacesInput'

class CargoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cargoTypeId: 0,
      departure: null,
    }
  }

  render() {
    return (
      <GiftedForm
        formName="cargo" // GiftedForm instances that use the same name will also share the same states
        openModal={(router) => {
          this.props.navigation.navigate('Modal', {
            renderContent: router.renderScene,
            onClose: router.onClose,
            getTitle: router.getTitle,
          })
        }}
        style={Style.form}
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={{
          cargoTypeId: 0,
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
        {/* <GiftedForm.ModalWidget */}
        {/*  title="Origin" */}
        {/*  displayValue="origin" */}
        {/*  disclosure={false} */}
        {/*  scrollEnabled={false} */}
        {/* > */}

        {/* // TODO: Add origin */}

        {/* <LocationInput ports={this.props.ports} portIsLoading={this.props.portIsLoading} /> */}
        {/* </GiftedForm.ModalWidget> */}

        {/* <GiftedForm.ModalWidget */}
        {/*  title="Destination" */}
        {/*  displayValue="destination" */}
        {/*  disclosure={false} */}
        {/*  scrollEnabled={false} */}
        {/* > */}
        {/*  <GiftedForm.GooglePlacesWidget */}
        {/*    code="destination" */}
        {/*    name="destination" */}
        {/*    title="City" */}
        {/*    autoFocus={true} */}
        {/*  /> */}
        {/* </GiftedForm.ModalWidget> */}

        {/* // TODO: Add destination */}

        {/*<GooglePlacesInput />*/}
        <View style={Style.rowContainer}>
          <View style={Style.row}>
            <Text
              numberOfLines={1}
              style={Style.textInputTitleInline}>Departure</Text>
            <DatePicker
              style={Style.datePickerContainer}
              date={this.state.departure}
              mode="date"
              placeholder="Select departure date"
              format="YYYY-MM-DD"
              minDate={moment(new Date())
                .add(1, 'days')
                .toDate()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{dateInput: Style.textInputInline}}
              onDateChange={(date) => {
                GiftedFormManager.updateValue('cargo', 'departure', date)
                this.setState({ ...this.state, departure: date })
              }}
            />
          </View>
          <View style={[Style.underline, Style.underlineIdle]}/>
        </View>


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
            GiftedFormManager.updateValue('cargo', 'cargoTypeId', index)
            this.setState({ ...this.state, cargoTypeId: index })
          }}
        />

        {this.state.cargoTypeId === 0 && FCL(this.props.containerTypes)}
        {this.state.cargoTypeId === 1 && LCL(this.props.weightUnits, this.props.dimensionUnits)}
        {this.state.cargoTypeId === 2 && Bulk(this.props.weightUnits, this.props.volumeUnits, this.props.bulkTypes)}

        <GiftedForm.ErrorsWidget widgetStyles={{
          errorContainer: Style.errorContainer,
          errorText: Style.errorText,
        }}/>

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
                departure: values.departure,
                cargoTypeId: values.cargoTypeId + 1, // because index starts at 0, TODO: remove this hack
                quantity: values.quantity,
                volume: values.volume,
                volumeUnit: values.volumeUnit === undefined ? 'NOT_USED' : values.volumeUnit,
                weight: values.weight,
                weightUnit: values.weightUnit === undefined ? 'NOT_USED' : values.weightUnit,
                length: values.length,
                width: values.width,
                height: values.height,
                dimensionUnit:
                  values.dimensionUnit === undefined ? 'NOT_USED' : values.dimensionUnit,
                containerTypeId: values.containerTypeId,
                bulkTypeId: values.bulkTypeId,
              }
              this.props.postCargo(payload)
              if (!this.props.cargoIsLoading && !this.props.cargoErrorMessage) {
                postSubmit()
                GiftedFormManager.reset('cargo')
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
    return dispatch({
      type: CargoActions.postCargo(payload),
      payload: payload,
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoForm)
