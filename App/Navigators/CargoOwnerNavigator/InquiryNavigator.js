import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import CargoContractScreen from 'App/Containers/CargoOwner/CargoContractScreen'
import ContractDetailScreen from 'App/Containers/CargoOwner/ContractDetailScreen'
import InquiryActiveScreen from 'App/Containers/CargoOwner/InquiryActiveScreen'
import InquiryHistoryScreen from 'App/Containers/CargoOwner/InquiryHistoryScreen'
import Style from './CargoOwnerNavigatorStyle'
import Colors from '../../Theme/Colors'

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
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: Colors.main,
      inactiveTintColor: 'grey',
      indicatorStyle: Style.indicator,
      style: Style.tabBarOptions,
    },
  }
)

const InquiryNavigator = createStackNavigator(
  {
    InquiryScreen: {
      screen: InquiryTopNavigator,
      navigationOptions: {
        header: null,
      },
    },
    CargoContractScreen: {
      screen: CargoContractScreen,
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
    ContractDetailScreen: {
      screen: ContractDetailScreen,
      navigationOptions: {
        tabBarVisible: false,
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
        },
      },
    },
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  }
)

InquiryNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ContractDetailScreen') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
}

export default InquiryNavigator
