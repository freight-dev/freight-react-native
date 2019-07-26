import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './UpcomingShipmentCardStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'

export const UpcomingShipmentCard = (props) => {
  return (
    <TouchableHighlight onPress={() => navigateToShipmentDetail(props.navigation, props.shipment)}>
      <View style={Style.card}>
        <View style={Style.shipmentOriginDestination}>
          <View style={Style.flowLineIcon}>
            <Entypo name="flow-line" size={90} color={Colors.main} />
          </View>
          <View style={Style.shipmentOriginDestinationText}>
            <View>
              <OpenSansBoldText>Tanjung Priok</OpenSansBoldText>
              <OpenSansItalicText>Jakarta, DKI Jakarta</OpenSansItalicText>
            </View>
            <View>
              <OpenSansBoldText>Semayang</OpenSansBoldText>
              <OpenSansItalicText>Balikpapan, Kalimantan Timur</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View>{renderShipmentInformation(props.shipment, props.cargo)}</View>
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
