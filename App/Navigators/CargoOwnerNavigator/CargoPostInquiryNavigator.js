import React from 'react'
import {
  createStackNavigator,
} from 'react-navigation'

import CargoInquiryPostScreen from '../../Containers/CargoOwner/CargoInquiryPostScreen'
import CargoFormModal from '../../Components/CargoForm/CargoFormModal'
import Colors from '../../Theme/Colors'

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

export default CargoPostInquiryNavigator
