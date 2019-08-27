import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../Theme/Colors'

export default StyleSheet.create({
  form: {
    flex: 1,
  },
  fieldGroupContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 5,
  },
  fieldTitleContainer: {
    paddingVertical: 5,
  },
  fieldTitleText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
  },
  fieldDataGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  field: {
    ...ApplicationStyles.component.border,
    borderColor: 'grey',
    marginHorizontal: 10,
    flex: 1,
  },
  spacer: {
    width: 0,
    flex: 0,
  },
  fieldTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  fieldText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  fieldUnit: {
    ...ApplicationStyles.component.border,
    borderColor: 'grey',
    marginHorizontal: 10,
    flex: 1,
  },
  fieldUnitTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  fieldUnitText: {
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  container: {
    ...ApplicationStyles.container,
    backgroundColor: Colors.main,
    flex: 1,
    flexDirection: 'column',
    padding: 40,
  },
  signUpContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    paddingVertical: 10,
  },
  textBorderContainer: {
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
  textNotRoundBorderContainer: {
    borderWidth: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  typeOuterLeftContainer: {
    flex: 1,
    paddingRight: 10,
  },
  typeOuterRightContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  typeInnerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  selected: {
    borderWidth: 1,
    borderColor: Colors.main,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  textDescriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  signUpButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 25,
  },
  signUpButton: {
    backgroundColor: Colors.main,
  },
  signUpText: {

  },
});
