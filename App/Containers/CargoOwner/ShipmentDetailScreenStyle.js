import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  map: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
})
