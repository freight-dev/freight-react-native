import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ContractDetailStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText } from './StyledText'
import { Badge } from 'react-native-elements'
import moment from 'moment'
import { formatNumber } from '../Helper/NumberHelper'

export const ContractDetail = (props) => {
  const contract = props.contract
  const cargo = props.cargo
  return (
    <View style={Style.card}>
      <ScrollView>
        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Origin</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>Tanjung Priok</OpenSansBoldText>
              <OpenSansItalicText>Jakarta, DKI Jakarta</OpenSansItalicText>
            </View>
          </View>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Destination</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>Semayang</OpenSansBoldText>
              <OpenSansItalicText>Balikpapan, Kalimantan Timur</OpenSansItalicText>
            </View>
          </View>
        </View>

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Date</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>
                {moment(contract.startDate).format('D MMM YYYY')}
                {' - '}
                {moment(contract.endDate).format('D MMM YYYY')}
              </OpenSansBoldText>
            </View>
          </View>
        </View>

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Cargo</OpenSansLightText>
            </View>
            {renderCargoInformation(cargo)}
          </View>
        </View>

        {contractGroupWithoutBorder('Charter Type',
          <OpenSansBoldText>{contract.charterType}</OpenSansBoldText>)}

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Ship</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>{contract.ship.name}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.company.name}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.yearBuilt}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.grossTonnage}</OpenSansBoldText>
            </View>
          </View>
        </View>

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>
                {contract.currency} {contract.price}
                {contract.priceUnit.toUpperCase() === 'NOT_USED' ? '' : ' / ' + contract.priceUnit}</OpenSansBoldText>
              <OpenSansBoldText>{contract.priceUnit}</OpenSansBoldText>
            </View>
          </View>
        </View>

        {contractGroupWithoutBorder('Charter Type',
          <OpenSansBoldText>{contract.charterType}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Incoterms',
          <OpenSansBoldText>{contract.incoterms.displayName}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Loading Type',
          <OpenSansBoldText>{contract.loadingType}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Cargo Sender',
          <OpenSansBoldText>{contract.cargoSender}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Cargo Receiver',
          <OpenSansBoldText>{contract.cargoReceiver}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Cargo Insurance',
          <OpenSansBoldText>{contract.cargoInsurance}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Ship Insurance',
          <OpenSansBoldText>{contract.shipInsurance}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Ship Agent',
          <OpenSansBoldText>{contract.shipAgent.type}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Miscellaneous Fee',
          <OpenSansBoldText>{contract.miscellaneousFee}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Demurrage',
          <OpenSansBoldText>{contract.demurrage} {contract.demurrageUnit}</OpenSansBoldText>)}

        <OpenSansBoldText>Laytime {contract.loadingLaytime} {contract.laytimeUnit}</OpenSansBoldText>
        <OpenSansBoldText>{contract.dischargeLaytime} {contract.laytimeUnit}</OpenSansBoldText>
        <OpenSansBoldText>{contract.totalLaytime} {contract.laytimeUnit}</OpenSansBoldText>

        {contractGroupWithoutBorder('Despatch Type',
          <OpenSansBoldText>{contract.despatchType}</OpenSansBoldText>)}
        {contractGroupWithoutBorder('Lay Days Type',
          <OpenSansBoldText>{contract.layDaysType}</OpenSansBoldText>)}

        <View style={Style.emptySpace}/>
      </ScrollView>
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
    <View style={Style.contractInfoData}>
      <OpenSansBoldText>{cargo.bulkType.displayName}</OpenSansBoldText>
      <OpenSansBoldText>Quantity {cargo.quantity}</OpenSansBoldText>
      <OpenSansBoldText>{cargo.weight} {cargo.weightUnit.toLowerCase()}</OpenSansBoldText>
      <OpenSansBoldText>{cargo.volume} {cargo.volumeUnit.toLowerCase()}</OpenSansBoldText>
    </View>
  )
}

const contractGroup = (title, data) => {
  return (
    <View style={Style.contractGroup}>
      <View style={Style.contractInfo}>
        <View style={Style.contractInfoTitle}>
          <OpenSansLightText>{title}</OpenSansLightText>
        </View>
        <View style={Style.contractInfoData}>
          {data}
        </View>
      </View>
    </View>
  )
}

const contractGroupWithoutBorder = (title, data) => {
  return (
    <View style={Style.contractGroupWithoutBorder}>
      <View style={Style.contractInfo}>
        <View style={Style.contractInfoTitle}>
          <OpenSansLightText>{title}</OpenSansLightText>
        </View>
        <View style={Style.contractInfoData}>
          {data}
        </View>
      </View>
    </View>
  )
}

ContractDetail.propTypes = {
  data: PropTypes.object,
  yearBuilt: PropTypes.int,
  grossTonnage: PropTypes.number,
  despatchType: PropTypes.string,
  layDaysType: PropTypes.string,
  priceUnit: PropTypes.string,
}
