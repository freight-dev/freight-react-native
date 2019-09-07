import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ShipmentActions from '../../Stores/Shipment/Actions'
import Style from './ShipmentInProgressScreenStyle'
import { InProgressShipmentCard } from '../../Components/InProgressShipmentCard'

class ShipmentInProgressScreen extends Component {
  componentDidMount() {
    this.props.getInProgressShipments({
      start: 0,
      limit: 20,
    })
  }

  _keyExtractor = (item) => item.shipment.id.toString()

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
          onEndReached={() => {
            if (this.props.inProgressShipments.length >= 20 ) {
              this.props.getInProgressShipments({
                start: this.props.upcomingShipmentsStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.getInProgressShipments({
            start: this.props.inProgressShipmentsStart,
            limit: 20,
          })}
          refreshing={this.props.inProgressShipmentsIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.inProgressShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.inProgressShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
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
  inProgressShipmentsStart: state.shipment.inProgressShipmentsStart,
  inProgressShipmentsIsLoading: state.shipment.inProgressShipmentsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getInProgressShipments: (param) => dispatch(ShipmentActions.getInProgressShipments(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentInProgressScreen)
