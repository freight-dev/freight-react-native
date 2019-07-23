import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ContractCardStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import { formatNumber } from '../Helper/NumberHelper'
import moment from 'moment'
import { Badge } from 'react-native-elements'

export const ContractCard = (props) => {
  const contract = props.contract.item
  const cargo = props.cargo
  if (contract === undefined || cargo === undefined) {
    return null
  }
  return (
    <TouchableHighlight onPress={() => navigateToContract(props.navigation, contract, cargo)}>
      <View style={Style.contract}>
        <View style={Style.cargoOriginDestination}>
          <View style={Style.contractOriginDestinationText}>
            <View style={Style.contractInfoField}>
              <OpenSansBoldText>Tanjung Priok</OpenSansBoldText>
              <OpenSansItalicText>Jakarta, DKI Jakarta</OpenSansItalicText>
            </View>
            <View style={Style.contractInfoField}>
              <OpenSansBoldText>Semayang</OpenSansBoldText>
              <OpenSansItalicText>Balikpapan, Kalimantan Timur</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View style={Style.contractInfo}>
          <View style={Style.badgeContainer}>
            <Badge
              status="success"
              value={<OpenSansText style={Style.badgeText}>Action Required</OpenSansText>}
            />
          </View>
          <View style={Style.contractInfoDetailField}>
            <OpenSansBoldText>
              {moment(contract.startDate).format('D MMM YYYY')}
              {' - '}
              {moment(contract.endDate).format('D MMM YYYY')}
            </OpenSansBoldText>
          </View>
          <View style={Style.contractInfoDetail}>
            <View style={Style.contractInfoDetailField}>
              <OpenSansText>{contract.charterType}</OpenSansText>
            </View>
            <View style={Style.contractInfoDetailField}>
              <OpenSansBoldText>
                {contract.currency} {formatNumber(contract.price)}
                {contract.priceUnit.toUpperCase() === 'NOT_USED' ? '' : ' / ' + contract.priceUnit}
              </OpenSansBoldText>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const navigateToContract = (navigation, contract, cargo) => {
  navigation.navigate('ContractDetailScreen', {
    contract: contract,
    cargo: cargo,
  })
}

ContractCard.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object,
  ship: PropTypes.object,
  name: PropTypes.string,
  company: PropTypes.object,
  price: PropTypes.number,
}
