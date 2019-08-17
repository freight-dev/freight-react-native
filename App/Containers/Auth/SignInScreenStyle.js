import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.container,
    backgroundColor: Colors.main,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  backgroundImage: {
    // position: 'absolute',
    opacity: 0.1,
  },
  titleContainer: {
    flex: 3,
    // fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 80,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'right',
  },
  tagLine: {
    flex: 1,
  },
  tagLineText: {
    fontSize: 20,
    color: 'white',
  },
  signInContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  textContainer: {
    paddingVertical: 5,
  },
  textBorderContainer: {
    // padding: 2,
    borderRadius: 40,
    borderWidth: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  iconContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    flex: 5,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: Colors.main,
  },
  signInButtonContainer: {
    padding: 10,
    opacity: 1,
    borderRadius: 10,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpContainer: {
    // paddingTop: 15,
    alignItems: 'center',
  },
});
