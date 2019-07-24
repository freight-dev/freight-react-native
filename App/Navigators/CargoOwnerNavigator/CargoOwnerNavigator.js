import {
  createBottomTabNavigator,
} from 'react-navigation'

import InquiryNavigator from 'App/Navigators/CargoOwnerNavigator/InquiryNavigator'
import PostFormNavigator from './PostFormNavigator'
import ShipmentNavigator from './ShipmentNavigator'

export default createBottomTabNavigator({
  PostScreen: PostFormNavigator,
  InquiryScreen: InquiryNavigator,
  ShipmentScreen: ShipmentNavigator,
})
