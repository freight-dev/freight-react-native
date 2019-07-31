import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: Colors.main,
  },
  headerTitle: {
    color: 'white',
    fontFamily: 'OpenSans',
    fontWeight: 'normal',
    justifyContent: 'center',
  },
  closeContainer: {
    paddingLeft: 10,
  },
  doneContainer: {
    paddingRight: 10,
  },
  done: {
    color: 'white',
    fontSize: 18,
  },
})
