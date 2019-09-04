import { createAppContainer, createStackNavigator } from 'react-navigation'

import CargoOwnerNavigator from 'App/Navigators/CargoOwnerNavigator/CargoOwnerNavigator'
// import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import AuthNavigator from './AuthNavigator'
import SignInScreen from '../Containers/Auth/SignInScreen'
import SignUpScreen from '../Containers/Auth/SignUpScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    // The ma  in application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    CargoOwner: CargoOwnerNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
