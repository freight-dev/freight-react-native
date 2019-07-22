import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import PostScreen from 'App/Containers/CargoOwner/PostScreen'
import CargoContractScreen from 'App/Containers/CargoOwner/CargoContractScreen'
import ContractDetailScreen from 'App/Containers/CargoOwner/ContractDetailScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import InquiryActiveScreen from 'App/Containers/CargoOwner/InquiryActiveScreen'
import InquiryHistoryScreen from 'App/Containers/CargoOwner/InquiryHistoryScreen'
import GiftedFormModal from '../Containers/CargoOwner/GiftedFormModal'
import Style from './CargoOwnerNavigatorStyle'

const PostFormNavigator = createStackNavigator(
  {
    PostScreen: { screen: PostScreen },
    Modal: { screen: GiftedFormModal },
  },
  {
    // mode: 'modal',
    headerMode: 'screen',
  }
)

const InquiryTopNavigator = createMaterialTopTabNavigator(
  {
    InquiryActiveScreen: {
      screen: InquiryActiveScreen,
      navigationOptions: {
        title: 'Active',
      },
    },
    InquiryHistoryScreen: {
      screen: InquiryHistoryScreen,
      navigationOptions: {
        title: 'History',
      },
    },
  },
  {
    // mode: 'modal',
    // headerMode: 'screen',
    headerMode: null,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      indicatorStyle: Style.indicator,
      style: Style.tabBarOptions,
    },
  }
)

const InquiryNavigator = createStackNavigator(
  {
    InquiryScreen: InquiryTopNavigator,
    CargoContractScreen: CargoContractScreen,
    ContractDetailScreen: ContractDetailScreen,
  },
  {
    // mode: 'modal',
    // headerMode: 'screen',
    headerMode: 'none',
  }
)

InquiryNavigator.navigationOptions = ({navigation})=>{
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ContractDetailScreen') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
}

export default createBottomTabNavigator({
  PostScreen: PostFormNavigator,
  InquiryScreen: InquiryNavigator,
  SplashScreen: SplashScreen,
})
