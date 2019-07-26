import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ShipmentActions from '../../Stores/Shipment/Actions'
import Style from './ShipmentUpcomingScreenStyle'
import { UpcomingShipmentCard } from '../../Components/UpcomingShipmentCard'

class ShipmentUpcomingScreen extends Component {
  componentDidMount() {
    this.props.getUpcomingShipments()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <UpcomingShipmentCard shipment={item.shipment} cargo={item.cargo} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.upcomingShipmentsIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.upcomingShipments}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

ShipmentUpcomingScreen.propTypes = {
  getUpcomingShipments: PropTypes.func,
  upcomingShipments: PropTypes.array,
  upcomingShipmentsIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  upcomingShipments: state.shipment.upcomingShipments,
  upcomingShipmentsIsLoading: state.shipment.upcomingShipmentsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getUpcomingShipments: () => dispatch(ShipmentActions.getUpcomingShipments()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentUpcomingScreen)
