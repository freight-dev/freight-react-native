import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Theme/Colors'
import SignUpScreen from '../../Containers/Auth/SignUpScreen'
import ShipmentNavigator from '../CargoOwnerNavigator/ShipmentNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CargoSearchScreen from '../../Containers/ShipOwner/CargoSearchScreen'
import CargoSearchNavigator from './CargoSearchNavigator'

const CargoSearchStack = createStackNavigator({
    CargoSearchScreen: CargoSearchNavigator,
  },
  {
    headerMode: 'none',
  });

CargoSearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={'md-search'}
      size={26}
      color={focused ? Colors.main : Colors.tabIconDefault}
    />
  ),
};

const ShipmentStack = createStackNavigator({
    ShipmentScreen: ShipmentNavigator,
  },
  {
    headerMode: 'none',
  });

ShipmentStack.navigationOptions = {
  tabBarLabel: 'Shipment',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={'md-boat'}
      size={26}
      color={focused ? Colors.main : Colors.tabIconDefault}
    />
  ),
};

export default createBottomTabNavigator({
  CargoSearchStack,
  ShipmentStack,
})
