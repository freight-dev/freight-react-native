import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './CargoCardStyle'
import { Badge } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'
import Colors from '../Theme/Colors'
import { secondaryLocation } from '../Helper/LocationHelper'

export const CargoCard = (props) => {
  const cargo = props.data
  return (
    <TouchableHighlight onPress={() => navigateToCargoContract(props.navigation, cargo)}>
      <View style={Style.card}>
        <View style={Style.cargoOriginDestination}>
          <View style={Style.flowLineIcon}>
            <Entypo name="flow-line" size={90} color={Colors.main} />
          </View>
          <View style={Style.cargoOriginDestinationText}>
            <View>
              <OpenSansBoldText>{cargo.origin.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(cargo.origin)}</OpenSansItalicText>
            </View>
            <View>
              <OpenSansBoldText>{cargo.destination.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(cargo.destination)}</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View>{renderCargoInformation(cargo)}</View>
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
        {cargo.actionCount > 0 ? <Badge badgeStyle={Style.badgeStyle} value={<OpenSansText style={Style.badgeText}>{cargo.actionCount}</OpenSansText>} /> : null}
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansLightText>Departure</OpenSansLightText>
        <OpenSansBoldText>{moment(cargo.departure).format('D MMM YY')}</OpenSansBoldText>
      </View>
      <View style={Style.cargoInfoField}>
        <OpenSansBoldText>{cargo.bulkType.displayName}</OpenSansBoldText>
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
