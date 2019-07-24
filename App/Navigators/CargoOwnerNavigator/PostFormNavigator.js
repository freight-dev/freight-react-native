import {
  createStackNavigator,
} from 'react-navigation'

import PostScreen from '../../Containers/CargoOwner/PostScreen'
import GiftedFormModal from '../../Containers/CargoOwner/GiftedFormModal'

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

export default PostFormNavigator
