import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: Colors.main,
    padding: 5,
    paddingBottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accept: {
    backgroundColor: 'green',
  },
  negotiate: {
    backgroundColor: 'blue',
  },
  decline: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
})
