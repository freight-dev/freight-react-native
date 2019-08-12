import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StatusBar } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../Theme/Colors'
import Style from './CargoFormModalStyle'
import { OpenSansText } from '../StyledText'
export default class CargoFormModal extends Component {
  static navigationOptions({ navigation }) {
    const { getTitle, onClose } = navigation.state.params || {}

    return {
      headerTitle: getTitle(),
      headerStyle: Style.header,
      headerTitleStyle: Style.headerTitle,
      headerLeft: (
        <AntDesign
          name="close"
          color="white"
          size={20}
          style={Style.closeContainer}
          onPress={() => {
            onClose(null, null)
            navigation.goBack()
          }}
        />
      ),
      headerRight: (
        <TouchableOpacity
          style={Style.doneContainer}
          onPress={() => {
            // TODO: stupid hack. figure out why!
            if (getTitle() === 'Origin' || getTitle() === 'Destination') {
              onClose(null, null)
            }
            navigation.goBack()
          }}>
          <OpenSansText style={Style.done}>Done</OpenSansText>
        </TouchableOpacity>
      ),
    }
  }

  render() {
    const { renderContent } = this.props.navigation.state.params || {}
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
        {renderContent()}
      </View>
    )
  }
}

CargoFormModal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }),
}

CargoFormModal.defaultProps = {
  navigation: null,
}
