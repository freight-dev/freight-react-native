import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './CargoCardStyle'
import { Badge } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'

export const CargoCard = (props) => {
  return (
    <TouchableHighlight onPress={() => navigateToCargoContract(props.navigation, props.data)}>
      <View style={Style.card}>
        <View style={Style.cargoOriginDestination}>
          <View style={Style.flowLineIcon}>
            <Entypo name="flow-line" size={90} color="#00b7d2" />
          </View>
          <View style={Style.cargoOriginDestinationText}>
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
        <View>{renderCargoInformation(props.data)}</View>
      </View>
    </TouchableHighlight>
  )
}

const navigateToCargoContract = (navigation, cargo) => {
  navigation.navigate('CargoContractScreen', {
    cargo: cargo,
  })
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
      <View style={Style.badgeContainer}>
        <Badge status="success" value={<OpenSansText style={Style.badgeText}>2</OpenSansText>} />
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Departure</OpenSansLightText>
        <OpenSansBoldText>{moment(cargo.departure).format('D MMM YYYY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansText>{cargo.bulkType.displayName}</OpenSansText>
      </View>
    </View>
  )
}

CargoCard.propTypes = {
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
