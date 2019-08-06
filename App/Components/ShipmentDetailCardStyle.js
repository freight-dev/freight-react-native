import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 5,
    borderWidth: 0,
  },
  cargo: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  cargoInfoField: {
    flexDirection: 'column',
    flex: 3,
  },
  line: {
    borderTopWidth: 0.2,
    height: 0.2,
    borderColor: 'grey',
  },
  ship: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  shipInfoLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 6,
  },
  shipInfoCenter: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 6,
  },
  shipInfoDetail: {
    flexDirection: 'row',
  },
  shipInfoRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 2,
  },
})
