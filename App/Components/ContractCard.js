import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ContractCardStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'
import { Badge } from 'react-native-elements'
import { contractStatusBadge, mapContractStatus } from '../Helper/ContractHelper'
import { secondaryLocation } from '../Helper/LocationHelper'
import { firstCharUpperCase, formatCurrency, formatNumberToText } from '../Helper/PrintHelper'

export const ContractCard = (props) => {
  const contract = props.contract.item
  const cargo = props.cargo

  if (contract === undefined || cargo === undefined) {
    return null
  }
  return (
    <TouchableHighlight onPress={() => navigateToContract(props.navigation, contract, cargo)}>
      <View style={Style.contract}>
        <View style={Style.contractOriginDestination}>
          <View style={Style.contractOriginDestinationText}>
            <View style={Style.contractInfoField}>
              <OpenSansBoldText>{contract.origin.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(contract.origin)}</OpenSansItalicText>
            </View>
            <View style={Style.contractInfoField}>
              <OpenSansBoldText>{contract.destination.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{secondaryLocation(contract.destination)}</OpenSansItalicText>
            </View>
          </View>
        </View>
        <View style={Style.contractInfo}>
          <View style={Style.badgeContainer}>
            {contractStatusBadge(contract.status)}
          </View>
          <View style={Style.contractInfoDetailField}>
            <OpenSansText>
              {moment(contract.startDate).format('D MMM YY')}
              {' - '}
              {moment(contract.endDate).format('D MMM YY')}
            </OpenSansText>
          </View>
          <View style={Style.contractInfoDetail}>
            <View style={Style.contractInfoDetailField}>
              <OpenSansText>{firstCharUpperCase(contract.charterType)}</OpenSansText>
            </View>
            <View style={Style.contractInfoDetailField}>
              <OpenSansBoldText>
                {formatCurrency(contract.currency)} {formatNumberToText(contract.price)}
                {contract.priceUnit.toUpperCase() === 'NOT_USED' ? '' : ' / ' + contract.priceUnit.toLowerCase()}
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
