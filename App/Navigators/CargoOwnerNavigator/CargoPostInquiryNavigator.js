import React from 'react'
import {
  createStackNavigator,
} from 'react-navigation'

import CargoInquiryPostScreen from '../../Containers/CargoOwner/CargoInquiryPostScreen'
import CargoFormModal from '../../Components/CargoForm/CargoFormModal'
import Colors from '../../Theme/Colors'
import InquiryNavigator from './InquiryNavigator'

const CargoPostInquiryNavigator = createStackNavigator(
  {
    CargoInquiryPostScreen: {
      screen: CargoInquiryPostScreen,
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

CargoPostInquiryNavigator.navigationOptions = ({navigation})=>{
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'Modal') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
}

export default CargoPostInquiryNavigator
