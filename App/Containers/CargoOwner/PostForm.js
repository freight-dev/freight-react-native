import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import DatePicker from 'react-native-datepicker'

import { cargoService as CargoActions } from '../../Services/CargoService'

class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      cargoTypeId: 0,
      departure: null,
    }
  }

  componentDidMount() {}

  validateInput(values) {
    switch (values.cargoTypeId) {
      // FCL
      case 0:
        // validator.isEmpty(values.containerType)
        break

      // LCL
      case 1:
        break

      // Bulk
      case 2:
        break

      default:
        break
    }
  }

  getFcl() {
    return (
      <GiftedForm>
        <GiftedForm.ModalWidget title="Container Type" displayValue="containerType">
          <GiftedForm.SelectWidget name="containerTypeId" multiple={false}>
            {this.props.containerTypes.map((containerType) => (
              <GiftedForm.OptionWidget
                key={containerType.id}
                title={containerType.displayName}
                value={containerType.id}
              />
            ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
        <GiftedForm.TextInputWidget
          name="quantity"
          title="Quantity"
          placeholder="Enter quantity.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
      </GiftedForm>
    )
  }

  getLcl() {
    return (
      <GiftedForm>
        <GiftedForm.TextInputWidget
          name="quantity"
          title="Quantity"
          placeholder="Enter quantity.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.TextInputWidget
          name="weight"
          title="Weight"
          placeholder="Enter weight.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.ModalWidget title="Weight Unit" displayValue="weightUnit">
          <GiftedForm.SelectWidget name="weightUnit" multiple={false}>
            {this.props.weightUnits
              .filter((weightUnit) => weightUnit !== 'NOT_USED')
              .map((weightUnit) => (
                <GiftedForm.OptionWidget key={weightUnit} title={weightUnit} value={weightUnit} />
              ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
        <GiftedForm.TextInputWidget
          name="length"
          title="Length"
          placeholder="Enter length.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.TextInputWidget
          name="width"
          title="Width"
          placeholder="Enter width.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.TextInputWidget
          name="height"
          title="Height"
          placeholder="Enter height.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.ModalWidget title="Dimension Unit" displayValue="dimensionUnit">
          <GiftedForm.SelectWidget name="dimensionUnit" multiple={false}>
            {this.props.dimensionUnits
              .filter((dimensionUnit) => dimensionUnit !== 'NOT_USED')
              .map((dimensionUnit) => (
                <GiftedForm.OptionWidget
                  key={dimensionUnit}
                  title={dimensionUnit}
                  value={dimensionUnit}
                />
              ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
      </GiftedForm>
    )
  }

  getBulk() {
    return (
      <GiftedForm>
        <GiftedForm.TextInputWidget
          name="quantity"
          title="Quantity"
          placeholder="Enter quantity.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.TextInputWidget
          name="weight"
          title="Weight"
          placeholder="Enter weight.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.ModalWidget title="Weight Unit" displayValue="weightUnit">
          <GiftedForm.SelectWidget name="weightUnit" multiple={false}>
            {this.props.weightUnits
              .filter((weightUnit) => weightUnit !== 'NOT_USED')
              .map((weightUnit) => (
                <GiftedForm.OptionWidget key={weightUnit} title={weightUnit} value={weightUnit} />
              ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
        <GiftedForm.TextInputWidget
          name="volume"
          title="Volume"
          placeholder="Enter volume.."
          clearButtonMode="while-editing"
          keyboardType="numeric"
        />
        <GiftedForm.ModalWidget title="Volume Unit" displayValue="volumeUnit">
          <GiftedForm.SelectWidget name="volumeUnit" multiple={false}>
            {this.props.volumeUnits
              .filter((volumeUnit) => volumeUnit !== 'NOT_USED')
              .map((volumeUnit) => (
                <GiftedForm.OptionWidget key={volumeUnit} title={volumeUnit} value={volumeUnit} />
              ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
        <GiftedForm.ModalWidget title="Bulk Type" displayValue="bulkType">
          <GiftedForm.SelectWidget name="bulkTypeId" multiple={false}>
            {this.props.bulkTypes.map((bulkType) => (
              <GiftedForm.OptionWidget
                key={bulkType.id}
                title={bulkType.displayName}
                value={bulkType.id}
              />
            ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
      </GiftedForm>
    )
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
        validators={{
          departure: {
            title: 'Departure date',
            validate: [
              {
                validator: (...args) => {
                  return args[0] !== undefined && args[0] !== ''
                },
                message: '{TITLE} is required',
              },
            ],
          },
          quantity: {
            title: 'Quantity',
            validate: [
              {
                validator: (...args) => {
                  return args[0] !== undefined && args[0] !== ''
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [1, 10],
                message: '{TITLE} is too huge',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          containerTypeId: {
            title: 'Container Type',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 0) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
            ],
          },
          weight: {
            title: 'Weight',
            validate: [
              {
                validator: (...args) => {
                  if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [0, 10],
                message: '{TITLE} is too heavy. Consider changing the weight unit',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          weightUnit: {
            title: 'Weight Unit',
            validate: [
              {
                validator: (...args) => {
                  if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
            ],
          },
          volume: {
            title: 'Weight',
            validate: [
              {
                validator: (...args) => {
                  if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [0, 10],
                message: '{TITLE} is too big. Consider changing the volume unit',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          volumeUnit: {
            title: 'Weight Unit',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 2) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
            ],
          },
          length: {
            title: 'Length',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [0, 10],
                message: '{TITLE} is too long. Consider changing the dimension unit',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          width: {
            title: 'Width',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [0, 10],
                message: '{TITLE} is too long. Consider changing the dimension unit',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          height: {
            title: 'Height',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
              {
                validator: 'isLength',
                arguments: [0, 10],
                message: '{TITLE} is too long. Consider changing the dimension unit',
              },
              {
                validator: 'matches',
                arguments: /^[0-9]*$/,
                message: '{TITLE} can contains only numeric characters',
              },
            ],
          },
          dimensionUnit: {
            title: 'Dimension Unit',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
                    return args[0] !== undefined && args[0] !== ''
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
            ],
          },
          bulkTypeId: {
            title: 'Bulk Type',
            validate: [
              {
                validator: (...args) => {
                  if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 2) {
                    return args[0] !== undefined
                  }
                  return true
                },
                message: '{TITLE} is required',
              },
            ],
          },
        }}
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

        <DatePicker
          style={{ width: '100%', backgroundColor: 'white' }}
          date={this.state.departure}
          mode="date"
          placeholder="Select departure date"
          format="YYYY-MM-DD"
          minDate={moment(new Date())
            .add(1, 'days')
            .toDate()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              // top: 4,
              marginLeft: 0,
            },
            dateInput: {
              flex: 1,
            },
          }}
          onDateChange={(date) => {
            GiftedFormManager.updateValue('cargo', 'departure', date)
            this.setState({ ...this.state, departure: date })
          }}
        />

        {/* <DatePicker */}
        {/*  style={{width: 200}} */}
        {/*  date={this.state.date} */}
        {/*  mode="date" */}
        {/*  placeholder="Select destination date" */}
        {/*  format="YYYY-MM-DD" */}
        {/*  minDate={new Date()} */}
        {/*  confirmBtnText="Confirm" */}
        {/*  cancelBtnText="Cancel" */}
        {/*  customStyles={{ */}
        {/*    dateIcon: { */}
        {/*      position: 'absolute', */}
        {/*      left: 0, */}
        {/*      // top: 4, */}
        {/*      marginLeft: 0 */}
        {/*    }, */}
        {/*    dateInput: { */}
        {/*      flex: 1 */}
        {/*    }, */}
        {/*  }} */}
        {/*  onDateChange={(date) => {this.setState({date: date})}} */}
        {/* /> */}

        <SegmentedControlTab
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          values={this.props.cargoTypes.map((cargoType) => cargoType.displayName)}
          selectedIndex={this.state.cargoTypeId}
          onTabPress={(index) => {
            GiftedFormManager.updateValue('cargo', 'cargoTypeId', index)
            this.setState({ ...this.state, cargoTypeId: index })
          }}
          borderRadius={0}
        />
        {this.state.cargoTypeId === 0 && this.getFcl()}
        {this.state.cargoTypeId === 1 && this.getLcl()}
        {this.state.cargoTypeId === 2 && this.getBulk()}

        {/* <GiftedForm.ModalWidget */}
        {/* title="Additional Description" */}
        {/* displayValue="message" */}
        {/* disclosure={false} */}
        {/* scrollEnabled={true} // true by default */}
        {/* > */}
        {/* <GiftedForm.TextAreaWidget */}
        {/*   name="message" */}
        {/*   autoFocus={true} */}
        {/*   placeholder="Additional description here.." */}
        {/* /> */}
        {/* </GiftedForm.ModalWidget> */}

        <GiftedForm.ErrorsWidget />

        <GiftedForm.SubmitWidget
          title="Search"
          widgetStyles={{
            submitButton: {
              // backgroundColor: themes.mainColor,
            },
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

        <GiftedForm.HiddenWidget name="tos" value={true} />
      </GiftedForm>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
  },
  tabsContainerStyle: {
    height: 50,
    // backgroundColor: '#F2F2F2'
  },
  tabStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 4,
    padding: 5,
  },
  tabTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  activeTabStyle: {
    backgroundColor: 'blue',
    // marginTop: 2
  },
  activeTabTextStyle: {
    color: 'white',
  },
})

PostForm.propTypes = {
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
)(PostForm)
