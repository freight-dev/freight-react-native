import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.container,
    flex: 1,
    backgroundColor: Colors.main,
    padding: 5,
    paddingBottom: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },
  button: {
    padding: 15,
    borderRadius: 15,
    flex: 1,
    backgroundColor: 'red',
  },
})
