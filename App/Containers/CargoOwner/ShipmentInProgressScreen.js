import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ShipmentActions from '../../Stores/Shipment/Actions'
import Style from './ShipmentInProgressScreenStyle'
import { InProgressShipmentCard } from '../../Components/InProgressShipmentCard'

class ShipmentInProgressScreen extends Component {
  componentDidMount() {
    this.props.getInProgressShipments()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <InProgressShipmentCard shipment={item.shipment} cargo={item.cargo} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.inProgressShipmentsIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.inProgressShipments}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

ShipmentInProgressScreen.propTypes = {
  getInProgressShipments: PropTypes.func,
  inProgressShipments: PropTypes.array,
  inProgressShipmentsIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  inProgressShipments: state.shipment.inProgressShipments,
  inProgressShipmentsIsLoading: state.shipment.inProgressShipmentsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getInProgressShipments: () => dispatch(ShipmentActions.getInProgressShipments()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentInProgressScreen)
