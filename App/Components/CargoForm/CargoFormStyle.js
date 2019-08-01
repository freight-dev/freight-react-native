import { PixelRatio, StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#c8c7cc',
  },
  row: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
  },
  titleContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // selfAlign: 'center',
    // backgroundColor: '#ff0000',
  },
  textInputInline: {
    fontSize: 15,
    flex: 1,
    height: 40,
    marginTop: 2,
    borderWidth: 0,
  },
  textInputTitleInline: {
    width: 110,
    fontSize: 15,
    color: '#000',
    paddingLeft: 10,
  },
  underline: {
    marginRight: 10,
    marginLeft: 10,
  },
  datePickerContainer: {
    borderWidth: 0,
    flex: 1,
  },
  tabsContainerStyle: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  tabStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding : 0,
  },
  activeTabStyle: {
    padding : 0,
    backgroundColor: Colors.main,
  },
  tabsTextStyle: {
    color: 'black',
    fontFamily: 'OpenSans',
  },
  activeTabTextStyle: {
    color: 'white',
    fontFamily: 'OpenSans',
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
