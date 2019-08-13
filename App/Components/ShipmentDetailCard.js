import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ShipmentDetailCardStyle'
import { Badge } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import {
  OpenSansBoldText,
  OpenSansItalicText,
  OpenSansLightItalicText,
  OpenSansLightText,
  OpenSansText,
} from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'
import StepIndicator from 'react-native-step-indicator'
import { mapShipStatus, shipStatus } from '../Helper/ShipmentHelper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const shipStatusStyle = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 15,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.main,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.main,
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: Colors.main,
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: Colors.main,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 14,
  labelFontFamily: 'OpenSans-Italic',
  currentStepLabelColor: Colors.main,
  labelAlign: 'flex-start',
}

export const ShipmentDetailCard = (props) => {
  const cargo = props.cargo
  const shipment = props.shipment
  return (
    <View style={Style.card}>
      <View style={Style.cargo}>
        <StepIndicator
          direction='vertical'
          stepCount={shipStatus.length}
          customStyles={shipStatusStyle}
          currentPosition={mapShipStatus(props.shipment.shipStatus)}
          labels={[shipment.origin.mainName, 'Loading', 'At sea', 'Discharge', shipment.destination.mainName]}
        />
      </View>
      <View style={Style.line} />
      <View style={Style.ship}>
        <View style={Style.shipInfoLeft}>
          <OpenSansText>{shipment.ship.name}</OpenSansText>
          <OpenSansLightItalicText>{shipment.ship.company.name}</OpenSansLightItalicText>
        </View>
        <View style={Style.shipInfoCenter}>
          <OpenSansText>{shipment.ship.type.displayName}</OpenSansText>
          <View style={Style.shipInfoDetail}>
            <OpenSansLightItalicText>{shipment.ship.yearBuilt}, </OpenSansLightItalicText>
            <OpenSansLightItalicText>{shipment.ship.grossTonnage} GT</OpenSansLightItalicText>
          </View>
        </View>
        <View style={Style.shipInfoRight}>
          <TouchableHighlight onPress={() => navigateToCargoContract(props.navigation, props.data)}>
            <FontAwesome5 name="chevron-circle-right" size={30} color={Colors.main} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const navigateToCargoContract = (navigation, cargo) => {
  // navigation.navigate('CargoContractScreen', {
  //   cargo: cargo,
  // })
}

const renderCargoInformation = (cargo, shipment) => {
  switch (cargo.cargoType.type) {
    case 'FCL':
      return FCL(cargo, shipment)
    case 'LCL':
      return LCL(cargo, shipment)
    case 'Bulk':
      return Bulk(cargo, shipment)
    default:
      return null
  }
}

const FCL = (cargo, shipment) => {
  return <Text>{cargo.containerType.displayName}</Text>
}

const LCL = (cargo, shipment) => {
  return <Text>{cargo.quantity}</Text>
}

const Bulk = (cargo, shipment) => {
  return (
    <View style={Style.cargoInfo}>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Departure</OpenSansLightText>
        <OpenSansBoldText>{moment(shipment.departure).format('D MMM YY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Estimated Arrival</OpenSansLightText>
        <OpenSansBoldText>{moment(shipment.arrival).format('D MMM YY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansBoldText>{cargo.bulkType.displayName}</OpenSansBoldText>
      </View>
    </View>
  )
}

ShipmentDetailCard.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object,
}

FCL.propTypes = {
  containerType: PropTypes.object,
  displayName: PropTypes.string,
}

LCL.propTypes = {
  quantity: PropTypes.int,
}

Bulk.propTypes = {
  displayName: PropTypes.string,
  bulkType: PropTypes.object,
}
