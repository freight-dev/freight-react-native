import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import ShipmentDetailScreen from 'App/Containers/CargoOwner/ShipmentDetailScreen'
import ShipmentUpcomingScreen from 'App/Containers/CargoOwner/ShipmentUpcomingScreen'
import ShipmentInProgressScreen from 'App/Containers/CargoOwner/ShipmentInProgressScreen'
import ShipmentCompletedScreen from 'App/Containers/CargoOwner/ShipmentCompletedScreen'
import Style from './CargoOwnerNavigatorStyle'
import Colors from '../../Theme/Colors'

const ShipmentTopNavigator = createMaterialTopTabNavigator(
  {
    ShipmentInProgressScreen: {
      screen: ShipmentInProgressScreen,
      navigationOptions: {
        title: 'In Progress',
      },
    },
    ShipmentUpcomingScreen: {
      screen: ShipmentUpcomingScreen,
      navigationOptions: {
        title: 'Upcoming',
      },
    },
    ShipmentCompletedScreen: {
      screen: ShipmentCompletedScreen,
      navigationOptions: {
        title: 'Completed',
      },
    },
  },
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: Colors.main,
      inactiveTintColor: 'grey',
      indicatorStyle: Style.indicator,
      style: Style.tabBarOptions,
    },
  }
)

const ShipmentNavigator = createStackNavigator(
  {
    ShipmentScreen: {
      screen: ShipmentTopNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ShipmentDetailScreen: {
      screen: ShipmentDetailScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTintColor: Colors.main,
        headerBackTitleStyle: {
          backgroundColor: 'white',
        },
        headerLeftContainerStyle: {
          backgroundColor: 'white',
          width: 30,
          height: 30,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          left: 10,
          top: 10,
        }
      },
    },
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  }
)

ShipmentNavigator.navigationOptions = ({navigation})=>{
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ShipmentDetailScreen') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
}

export default ShipmentNavigator
