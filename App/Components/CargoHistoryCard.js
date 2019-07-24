import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './CargoHistoryCardStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'

export const CargoHistoryCard = (props) => {
  const cargo = props.data
  return (
    <View style={Style.card}>
      <View style={Style.cargo}>
        <View style={Style.cargoOriginDestination}>
          <View style={Style.cargoOriginDestinationText}>
            <View style={Style.cargoInfoField}>
              <OpenSansLightText>Origin</OpenSansLightText>
              <OpenSansBoldText>Tanjung Priok</OpenSansBoldText>
              <OpenSansItalicText>Jakarta, DKI Jakarta</OpenSansItalicText>
            </View>
            <View style={Style.cargoInfoField}>
              <OpenSansLightText>Destination</OpenSansLightText>
              <OpenSansBoldText>Semayang</OpenSansBoldText>
              <OpenSansItalicText>Balikpapan, Kalimantan Timur</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View>{renderCargoInformation(cargo)}</View>
      </View>
      <View style={Style.bottomCardContainer}>
        <View style={Style.statusContainer}>
          <OpenSansText style={Style.statusText}>{cargo.status}</OpenSansText>
        </View>
        <View style={Style.buttonContainer}>
          <TouchableHighlight style={Style.button}>
            <OpenSansText style={Style.buttonText}>Inquire Again</OpenSansText>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const renderCargoInformation = (cargo) => {
  switch (cargo.cargoType.type) {
    case 'FCL':
      return FCL(cargo)
    case 'LCL':
      return LCL(cargo)
    case 'Bulk':
      return Bulk(cargo)
    default:
      return null
  }
}

const FCL = (cargo) => {
  return <Text>{cargo.containerType.displayName}</Text>
}

const LCL = (cargo) => {
  return <Text>{cargo.quantity}</Text>
}

const Bulk = (cargo) => {
  return (
    <View style={Style.cargoInfo}>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Departure</OpenSansLightText>
        <OpenSansBoldText>{moment(cargo.departure).format('D MMM YYYY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Type</OpenSansLightText>
        <OpenSansBoldText>{cargo.bulkType.displayName}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansText>{cargo.weight} {cargo.weightUnit.toLowerCase()}</OpenSansText>
        <OpenSansText>{cargo.volume} {cargo.volumeUnit.toLowerCase()}</OpenSansText>
      </View>
    </View>
  )
}

CargoHistoryCard.propTypes = {
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
