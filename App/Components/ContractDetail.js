import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './ContractDetailStyle'

export const ContractDetail = (props) => {
  return (
    <View style={Style.card}>
      <ScrollView>
        <Text>{props.data.ship.name}</Text>
        <Text>{props.data.ship.company.name}</Text>
        <Text>{props.data.ship.yearBuilt}</Text>
        <Text>{props.data.ship.grossTonnage}</Text>
        <Text>{props.data.despatchType}</Text>
        <Text>{props.data.layDaysType}</Text>
        <Text>{props.data.price}</Text>
        <Text>{props.data.priceUnit}</Text>
        <Text>{props.data.quantity}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

ContractDetail.propTypes = {
  data: PropTypes.object,
  yearBuilt: PropTypes.int,
  grossTonnage: PropTypes.number,
  despatchType: PropTypes.string,
  layDaysType: PropTypes.string,
  priceUnit: PropTypes.string,
}
