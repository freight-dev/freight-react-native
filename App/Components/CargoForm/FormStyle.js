import { PixelRatio, StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
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
})
