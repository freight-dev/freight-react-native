import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../Theme/Colors'

export default StyleSheet.create({
  card: {
    ...ApplicationStyles.component.card,
    flexDirection: 'column',
  },
  cargo: {
    flexDirection: 'row',
  },
  cargoOriginDestination: {
    ...ApplicationStyles.component.cardLeftInfo,
    flex: 7,
    justifyContent: 'space-between',
  },
  cargoOriginDestinationText: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cargoInfo: {
    ...ApplicationStyles.component.cardRightInfo,
    flex: 4,
    borderLeftWidth: 0.2,
    borderColor: 'grey',
    paddingLeft: 25,
  },
  cargoInfoField: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 2,
  },
  bottomCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  statusContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  statusText: {
    color: Colors.red,
  },
  buttonContainer: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.greenButton,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
})
