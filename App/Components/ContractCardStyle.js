import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  contract: {
    ...ApplicationStyles.component.card,
  },
  contractOriginDestination: {
    ...ApplicationStyles.component.cardLeftInfo,
    flex: 7,
  },
  contractOriginDestinationText: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contractInfo: {
    ...ApplicationStyles.component.cardRightInfo,
    flex: 4,
  },
  contractInfoDetail: {
    justifyContent: 'flex-end',
  },
  contractInfoField: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  contractInfoDetailField: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  badgeContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  badgeText: {
    color: 'white',
    padding: 5,
  },
  flowLineIcon: {
    alignItems: 'flex-start',
    marginLeft: -25,
    marginRight: -25,
  },

  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
})
