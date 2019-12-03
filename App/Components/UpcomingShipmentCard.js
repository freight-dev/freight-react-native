import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './UpcomingShipmentCardStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText } from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'
import { secondaryLocation } from '../Helper/LocationHelper'

export const UpcomingShipmentCard = (props) => {
  const shipment = props.shipment
  const cargo = props.cargo
  const ship = props.ship
  return (
    <TouchableHighlight onPress={() => navigateToShipmentDetail(props.navigation, shipment, cargo, ship)}>
      <View style={Style.card}>
        <View style={Style.shipmentOriginDestination}>
          {/*<View style={Style.flowLineIcon}>*/}
          {/*  <Entypo name="flow-line" size={90} color={Colors.main} />*/}
          {/*</View>*/}
          <View style={Style.shipmentOriginDestinationText}>
            <View>
              <OpenSansBoldText>{shipment.origin.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(shipment.origin)}</OpenSansItalicText>
            </View>
            <View>
              <OpenSansBoldText>{shipment.destination.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(shipment.destination)}</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View>{renderShipmentInformation(props.shipment, props.cargo)}</View>
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

UpcomingShipmentCard.propTypes = {
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
