import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import CargoSearchScreen from 'App/Containers/ShipOwner/CargoSearchScreen'
import Style from './ShipOwnerNavigatorStyle'
import Colors from '../../Theme/Colors'
import CargoInquiryPostScreen from '../../Containers/CargoOwner/CargoInquiryPostScreen'
import CargoFormModal from '../../Components/CargoForm/CargoFormModal'

const CargoSearchNavigator = createStackNavigator(
  {
    CargoSearchScreen: {
      screen: CargoSearchScreen,
      navigationOptions: {
        headerStyle: {
        },
        headerTitle: 'Freight',
        headerTitleStyle: {
          color: Colors.main,
        }
      },
    },
    Modal: { screen: CargoFormModal },
  },
  {
    // mode: 'modal',
    headerMode: 'screen',
  }
)

CargoSearchNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ContractDetailScreen') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
}

export default CargoSearchNavigator
