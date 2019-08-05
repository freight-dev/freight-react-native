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
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    borderRadius: 5,
  },
})
