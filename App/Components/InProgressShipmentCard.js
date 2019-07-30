import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './InProgressShipmentCardStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText } from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'
import StepIndicator from 'react-native-step-indicator'
import { mapShipStatus, shipStatus } from '../Helper/ShipmentHelper'

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
  return (
    <TouchableHighlight onPress={() => navigateToShipmentDetail(props.navigation, props.shipment)}>
      <View style={Style.card}>
        <View style={Style.topCard}>
          <View style={Style.shipmentOriginDestinationContainer}>
            <View style={Style.shipmentOriginDestination}>
              <View style={Style.shipmentOrigin}>
                <OpenSansLightText>Origin</OpenSansLightText>
                <OpenSansBoldText>Tanjung Priok</OpenSansBoldText>
                <OpenSansItalicText>Jakarta, DKI Jakarta</OpenSansItalicText>
              </View>
              <View>
                <OpenSansLightText>Destination</OpenSansLightText>
                <OpenSansBoldText>Semayang</OpenSansBoldText>
                <OpenSansItalicText>Balikpapan, Kalimantan Timur</OpenSansItalicText>
              </View>
            </View>
          </View>
          <View>{renderShipmentInformation(props.shipment, props.cargo)}</View>
        </View>
        <View style={Style.shipStatus}>
          <StepIndicator
            stepCount={shipStatus.length}
            customStyles={shipStatusStyle}
            currentPosition={mapShipStatus(props.shipment.shipStatus)}
            labels={shipStatus}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const navigateToShipmentDetail = (navigation, shipment) => {
  navigation.navigate('ShipmentDetailScreen', {
    shipment: shipment,
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
        <OpenSansBoldText>{moment(shipment.departure).format('D MMM YYYY')}</OpenSansBoldText>
      </View>
      <View style={Style.shipmentInfoField}>
        <OpenSansLightText>Estimated Arrival</OpenSansLightText>
        <OpenSansBoldText>{moment(shipment.arrival).format('D MMM YYYY')}</OpenSansBoldText>
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
