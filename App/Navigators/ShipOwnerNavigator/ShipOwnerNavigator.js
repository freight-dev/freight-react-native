import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Theme/Colors'
import SignUpScreen from '../../Containers/Auth/SignUpScreen'

export default createBottomTabNavigator({
  ShipmentStack: SignUpScreen,
})
