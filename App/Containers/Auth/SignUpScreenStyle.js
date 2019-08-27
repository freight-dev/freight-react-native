import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.container,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
  },
});
