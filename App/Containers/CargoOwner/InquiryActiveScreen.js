import React, { Component } from 'react'
import { FlatList, View, Text, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { CargoCard } from '../../Components/CargoCard'
import { connect } from 'react-redux'
import Style from './InquiryActiveScreenStyle'

class InquiryActiveScreen extends Component {
  componentDidMount() {
    this.props.getActiveCargos()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <CargoCard data={item} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.activeCargosIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.activeCargos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

InquiryActiveScreen.propTypes = {
  getActiveCargos: PropTypes.func,
  activeCargos: PropTypes.array,
  activeCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  activeCargos: state.cargo.activeCargos,
  activeCargosIsLoading: state.cargo.activeCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getActiveCargos: () => dispatch(CargoActions.getActiveCargos()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryActiveScreen)
