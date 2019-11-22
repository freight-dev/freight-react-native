import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ContractDetailStyle'
import { OpenSansBoldText, OpenSansItalicText, OpenSansLightText, OpenSansText } from './StyledText'
import moment from 'moment'
import {
  firstCharUpperCase,
  firstCharUpperCaseAndRemoveUnderscore,
  formatCurrency,
  printNumber,
} from '../Helper/PrintHelper'

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
              <OpenSansBoldText>{contract.origin.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{contract.origin.secondaryName}</OpenSansItalicText>
            </View>
          </View>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Destination</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>{contract.destination.mainName}</OpenSansBoldText>
              <OpenSansItalicText>{contract.destination.secondaryName}</OpenSansItalicText>
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

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Ship</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>{contract.ship.name}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.company.name}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.yearBuilt}</OpenSansBoldText>
              <OpenSansBoldText>{contract.ship.grossTonnage} GT</OpenSansBoldText>
            </View>
          </View>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoTitle}>
              <OpenSansLightText>Facilities</OpenSansLightText>
            </View>
            <View style={Style.contractInfoData}>
              {contract.ship.shipFacilities.map(shipFacility => {
                if (shipFacility.description) {
                  return (
                    <View style={Style.contractInfoDataInline} key={shipFacility.type}>
                      <OpenSansBoldText>{shipFacility.displayName}</OpenSansBoldText>
                      <OpenSansLightText> </OpenSansLightText>
                      <OpenSansLightText>{shipFacility.description}</OpenSansLightText>
                    </View>
                  )
                }
                return (
                  <View style={Style.contractInfoDataInline} key={shipFacility.type}>
                    <OpenSansBoldText>{shipFacility.displayName}</OpenSansBoldText>
                  </View>
                )
              })}
            </View>
          </View>
        </View>

        <View style={Style.contractGroup}>
          <View style={Style.contractInfo}>
            <View style={Style.contractInfoData}>
              <OpenSansBoldText>
                {formatCurrency(contract.currency)} {contract.price}
                {contract.priceUnit.toUpperCase() === 'NOT_USED' ? '' : ' / ' + contract.priceUnit.toLowerCase()}</OpenSansBoldText>
            </View>
          </View>
        </View>

        {contractGroupWithoutBorder('Charter Type', firstCharUpperCaseAndRemoveUnderscore(contract.charterType))}
        {contractGroupWithoutBorder('Incoterms', contract.incoterms.displayName)}
        {contractGroupWithoutBorder('Loading Type', contract.loadingType)}
        {contractGroupWithoutBorder('Cargo Sender', firstCharUpperCaseAndRemoveUnderscore(contract.cargoSender))}
        {contractGroupWithoutBorder('Cargo Receiver', firstCharUpperCaseAndRemoveUnderscore(contract.cargoReceiver))}
        {contractGroupWithoutBorder('Cargo Insurance', firstCharUpperCaseAndRemoveUnderscore(contract.cargoInsurance))}
        {contractGroupWithoutBorder('Ship Insurance', firstCharUpperCaseAndRemoveUnderscore(contract.shipInsurance))}
        {contractGroupWithoutBorder('Ship Agent', contract.shipAgent.type)}
        {contractGroupWithoutBorder('Miscellaneous Fee', firstCharUpperCaseAndRemoveUnderscore(contract.miscellaneousFee))}
        {contractGroupWithoutBorder('Demurrage', contract.demurrage, contract.demurrageUnit)}

        {loadLaytime(contract)}

        {contractGroupWithoutBorder('Despatch Type', contract.despatchType)}
        {contractGroupWithoutBorder('Lay Days Type', contract.layDaysType)}

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
      <OpenSansBoldText>{printNumber(cargo.weight, cargo.weightUnit)}</OpenSansBoldText>
      <OpenSansBoldText>{printNumber(cargo.volume, cargo.volumeUnit)}</OpenSansBoldText>
    </View>
  )
}

const contractGroupWithoutBorder = (title, data, unit=null) => {
  if (!data || data === 'NOT_USED') return
  return (
    <View style={Style.contractGroupWithoutBorder}>
      <View style={Style.contractInfo}>
        <View style={Style.contractInfoTitle}>
          <OpenSansLightText>{title}</OpenSansLightText>
        </View>
        <View style={Style.contractInfoData}>
            <OpenSansBoldText>{printNumber(data, unit)}</OpenSansBoldText>
        </View>
      </View>
    </View>
  )
}

const loadLaytime = (contract) => {
  if (contract.laytimeUnit === 'NOT_USED') return
  return (
    <View style={Style.contractGroupWithoutBorder}>
      <View style={Style.contractInfo}>
        <View style={Style.contractInfoTitle}>
          <OpenSansLightText>Laytime</OpenSansLightText>
        </View>
        <View style={Style.contractInfoData}>
          {laytimeHelper('Loading Laytime', contract.loadingLaytime, contract.laytimeUnit)}
          {laytimeHelper('Discharge Laytime', contract.dischargeLaytime, contract.laytimeUnit)}
          {laytimeHelper('Total Laytime', contract.totalLaytime, contract.laytimeUnit)}
        </View>
      </View>
    </View>
  )
}

const laytimeHelper = (title, data, unit) => {
  if (!data || data === 'NOT_USED') return
  return (
    <View style={Style.laytime}>
      <OpenSansText style={Style.laytimeTitle}>{title}</OpenSansText>
      <OpenSansBoldText style={Style.laytimeData}>{printNumber(data, unit)}</OpenSansBoldText>
    </View>
  )
}

ContractDetail.propTypes = {
  data: PropTypes.object,
  grossTonnage: PropTypes.number,
  despatchType: PropTypes.string,
  layDaysType: PropTypes.string,
  priceUnit: PropTypes.string,
}
