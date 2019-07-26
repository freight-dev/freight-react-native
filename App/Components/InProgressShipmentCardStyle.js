import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  card: {
    ...ApplicationStyles.component.card,
  },
  shipmentOriginDestination: {
    ...ApplicationStyles.component.cardLeftInfo,
    flex: 7,
  },
  shipmentOriginDestinationText: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  shipmentInfo: {
    ...ApplicationStyles.component.cardRightInfo,
    flex: 4,
  },
  flowLineIcon: {
    alignItems: 'flex-start',
    marginLeft: -25,
    marginRight: -25,
  },
  shipmentInfoField: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
})
