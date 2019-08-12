import { StyleSheet } from 'react-native'
import Colors from './Colors'

export default {
  screen: {
    container: {
      flex: 1,
    },
  },
  component: {
    card: {
      padding: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderStyle: 'solid',
      // borderWidth: StyleSheet.hairlineWidth,
      borderWidth: 0.8,
      borderRadius: 5,
      borderColor: Colors.border,
    },
    cardLeftInfo: {
      flexDirection: 'row',
    },
    cardRightInfo: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
    },
    buttonShadow: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: 'black',
      shadowOpacity: 0.8,
    },
    border: {
      borderWidth: StyleSheet.hairlineWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}
