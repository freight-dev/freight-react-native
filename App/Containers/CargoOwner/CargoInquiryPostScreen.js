import React from 'react'
import { View, ActivityIndicator, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './CargoInquiryPostScreenStyle'
import SearchForm from '../../Components/CargoForm/CargoForm'
import { Images } from 'App/Theme'

class CargoInquiryPostScreen extends React.Component {
  componentDidMount() {
    // this.props.fetchUser()
  }

  render() {
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        {this.props.configIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SearchForm navigation={this.props.navigation} />
        )}
      </View>
    )
  }
}

CargoInquiryPostScreen.propTypes = {
  containerTypes: PropTypes.array,
  bulkTypes: PropTypes.array,
  cargoTypes: PropTypes.array,
  configIsLoading: PropTypes.bool,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  containerTypes: state.config.containerTypes,
  bulkTypes: state.config.bulkTypes,
  cargoTypes: state.config.cargoTypes,
  configIsLoading: state.config.configIsLoading,
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  // getPort: () => dispatch(PortActions.getPort()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoInquiryPostScreen)
