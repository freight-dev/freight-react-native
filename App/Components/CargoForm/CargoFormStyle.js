import { PixelRatio, StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  form: {
    flex: 1,
  },
  dateText: {
    fontSize: 15,
    color: 'black',
  },
  placeHolderDateText: {
    fontSize: 15,
    color: 'grey',
  },
  datePickerText: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    borderWidth: 0,
  },
  tabsContainerStyle: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  tabStyle: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 0,
    padding : 0,
  },
  activeTabStyle: {
    padding : 0,
    backgroundColor: Colors.main,
  },
  tabsTextStyle: {
    color: 'black',
    // fontFamily: 'OpenSans',
  },
  activeTabTextStyle: {
    color: 'white',
    // fontFamily: 'OpenSans',
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: Colors.red,
  },
  errorText: {
    color: 'white',
    fontFamily: 'OpenSans'
  },
  submitButton: {
    backgroundColor: Colors.main,
  },
  textSubmitButton: {
    color: 'white',
    fontFamily: 'OpenSans'
  },
})
