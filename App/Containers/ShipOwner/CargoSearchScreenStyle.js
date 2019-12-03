import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.backgroundMain,
  },
})
