import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'
import Colors from '../../Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.main,
  },
  cargo: {
    backgroundColor: Colors.main,
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 50,
  },
  cargoOriginDestination: {
    ...ApplicationStyles.component.cardLeftInfo,
    flex: 7,
    justifyContent: 'space-between',
  },
  cargoOriginDestinationText: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cargoInfo: {
    ...ApplicationStyles.component.cardRightInfo,
    flex: 4,
    borderLeftWidth: 0.2,
    borderColor: 'white',
    paddingLeft: 25,
  },
  cargoInfoField: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 2,
  },

  statusSearchContainer: {
    paddingHorizontal: 10,
  },
  statusSearchBar: {
    flexGrow: 0,
    padding: 10,
  },
  statusSearch: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
  },
  statusSearchSelected: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.main,
  },
  statusSearchText: {
    ...Fonts.style.notSelected,
  },
  statusSearchTextSelected: {
    ...Fonts.style.selected,
  },

  contracts: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
  },
})
