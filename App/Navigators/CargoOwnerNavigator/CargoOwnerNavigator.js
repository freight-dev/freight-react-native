import {
  createBottomTabNavigator,
} from 'react-navigation'

import InquiryNavigator from 'App/Navigators/CargoOwnerNavigator/InquiryNavigator'
import CargoPostInquiryNavigator from './CargoPostInquiryNavigator'
import ShipmentNavigator from './ShipmentNavigator'

export default createBottomTabNavigator({
  CargoPostInquiryScreen: CargoPostInquiryNavigator,
  InquiryScreen: InquiryNavigator,
  ShipmentScreen: ShipmentNavigator,
})
