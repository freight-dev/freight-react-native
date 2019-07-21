import React from 'react'
import { Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './PostScreenStyle'
import SearchForm from './PostForm'
import { Images } from 'App/Theme'

class PostScreen extends React.Component {
  componentDidMount() {
    // this.props.fetchUser()
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.configIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SearchForm navigation={this.props.navigation} />
        )}
      </View>
    )
  }
}

PostScreen.propTypes = {
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
)(PostScreen)
