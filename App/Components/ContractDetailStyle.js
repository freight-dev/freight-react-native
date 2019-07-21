import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  card: {
    ...ApplicationStyles.component.card,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  // cargoOriginDestination: {
  //   ...ApplicationStyles.component.cardLeftInfo,
  //   flex: 7,
  // },
  // cargoOriginDestinationText: {
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-start',
  //   marginTop: 10,
  // },
  // cargoInfo: {
  //   ...ApplicationStyles.component.cardRightInfo,
  //   flex: 4,
  // },
  // badgeContainer: {
  //   justifyContent: 'flex-end',
  //   flexDirection: 'row',
  // },
  // badgeText: {
  //   color: 'white',
  // },
  // flowLineIcon: {
  //   alignItems: 'flex-start',
  //   marginLeft: -25,
  //   marginRight: -25,
  // },
  // cargoInfoField: {
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-end',
  // },
  // title: {
  //   ...Fonts.style.h2,
  //   textAlign: 'center',
  //   marginBottom: 10,
  // },
})
