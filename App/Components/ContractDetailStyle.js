import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  card: {
    ...ApplicationStyles.component.card,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  contractGroup: {
    flexDirection: 'column',
    padding: 5,
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contractGroupWithoutBorder: {
    flexDirection: 'column',
    padding: 5,
  },
  contractInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 2,
  },
  contractInfoTitle: {
    justifyContent: 'flex-start',
    flex: 3,
  },
  contractInfoData: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 9
  },
  emptySpace: {
    height: 70,
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
