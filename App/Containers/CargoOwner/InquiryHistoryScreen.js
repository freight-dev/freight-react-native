import React, { Component } from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { connect } from 'react-redux'
import { CargoHistoryCard } from '../../Components/CargoHistoryCard'
import Style from './InquiryHistoryScreenStyle'

class InquiryHistoryScreen extends Component {
  componentDidMount() {
    this.props.getHistoryCargos()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <CargoHistoryCard data={item} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.historyCargosIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.historyCargos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

InquiryHistoryScreen.propTypes = {
  getHistoryCargos: PropTypes.func,
  historyCargos: PropTypes.array,
  historyCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  historyCargos: state.cargo.historyCargos,
  historyCargosIsLoading: state.cargo.historyCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getHistoryCargos: () => dispatch(CargoActions.getHistoryCargos()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryHistoryScreen)
