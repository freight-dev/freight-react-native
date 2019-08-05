import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import InquiryNavigator from 'App/Navigators/CargoOwnerNavigator/InquiryNavigator'
import CargoPostInquiryNavigator from './CargoPostInquiryNavigator'
import ShipmentNavigator from './ShipmentNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Theme/Colors'

const CargoPostInquiryStack = createStackNavigator({
    CargoPostInquiryScreen: CargoPostInquiryNavigator,
  },
  {
    headerMode: 'none',
  });

CargoPostInquiryStack.navigationOptions = {
  tabBarLabel: 'Post',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      name={'pencil'}
      size={26}
      color={focused ? Colors.main : Colors.tabIconDefault}
    />
  ),
};

const InquiryStack = createStackNavigator({
    InquiryScreen: InquiryNavigator,
  },
  {
    headerMode: 'none',
  });

InquiryStack.navigationOptions = {
  tabBarLabel: 'Inquiry',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={'ios-folder-open'}
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
  CargoPostInquiryStack,
  InquiryStack,
  ShipmentStack,
})
