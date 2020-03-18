import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './InProgressShipmentCardStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText } from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'
import StepIndicator from 'react-native-step-indicator'
import { mapShipStatus, shipStatus } from '../Helper/ShipmentHelper'
import { secondaryLocation } from '../Helper/LocationHelper'

const shipStatusStyle = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 20,
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
  labelSize: 13,
  labelFontFamily: 'OpenSans-Italic',
  currentStepLabelColor: Colors.main
}

export const InProgressShipmentCard = (props) => {
  const cargo = props.cargo
  const shipment = props.shipment
  const ship = props.ship
  return (
    <TouchableHighlight onPress={() => navigateToShipmentDetail(props.navigation, shipment, cargo, ship)}>
      <View style={Style.card}>
        <View style={Style.topCard}>
          <View style={Style.shipmentOriginDestinationContainer}>
            <View style={Style.shipmentOriginDestination}>
              <View style={Style.shipmentOrigin}>
                <OpenSansLightText>Origin</OpenSansLightText>
                <OpenSansBoldText>{shipment.origin.mainName}</OpenSansBoldText>
                <OpenSansItalicText>{secondaryLocation(shipment.origin)}</OpenSansItalicText>
              </View>
              <View>
                <OpenSansLightText>Destination</OpenSansLightText>
                <OpenSansBoldText>{shipment.destination.mainName}</OpenSansBoldText>
                <OpenSansItalicText>{secondaryLocation(shipment.destination)}</OpenSansItalicText>
              </View>
            </View>
          </View>
          <View>{renderShipmentInformation(shipment, cargo)}</View>
        </View>
        <View style={Style.shipStatus}>
          <StepIndicator
            stepCount={shipStatus.length}
            customStyles={shipStatusStyle}
            currentPosition={mapShipStatus(ship.status)}
            labels={shipStatus}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const navigateToShipmentDetail = (navigation, shipment, cargo, ship) => {
  navigation.navigate('ShipmentDetailScreen', {
    shipment: shipment,
    cargo: cargo,
    ship: ship,
  })
}

const renderShipmentInformation = (shipment, cargo) => {
  switch (cargo.cargoType.type) {
    case 'FCL':
      return FCL(shipment, cargo)
    case 'LCL':
      return LCL(shipment, cargo)
    case 'Bulk':
      return Bulk(shipment, cargo)
    default:
      return null
  }
}

const FCL = (shipment, cargo) => {
  return <Text>{cargo.containerType.displayName}</Text>
}

const LCL = (shipment, cargo) => {
  return <Text>{cargo.quantity}</Text>
}

const Bulk = (shipment, cargo) => {
  return (
    <View style={Style.shipmentInfo}>
      <View style={Style.shipmentInfoField}>
        <OpenSansLightText>Departure</OpenSansLightText>
        <OpenSansBoldText>{moment(shipment.departure).format('D MMM YY')}</OpenSansBoldText>
      </View>
      <View style={Style.shipmentInfoField}>
        <OpenSansLightText>Estimated Arrival</OpenSansLightText>
        <OpenSansBoldText>{moment(shipment.arrival).format('D MMM YY')}</OpenSansBoldText>
      </View>
      <View style={Style.shipmentInfoField}>
        <OpenSansBoldText>{cargo.bulkType.displayName}</OpenSansBoldText>
      </View>
    </View>
  )
}

InProgressShipmentCard.propTypes = {
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
