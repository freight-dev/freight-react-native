import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ShipmentActions from '../../Stores/Shipment/Actions'
import Style from './ShipmentUpcomingScreenStyle'
import { UpcomingShipmentCard } from '../../Components/UpcomingShipmentCard'

class ShipmentUpcomingScreen extends Component {
  componentDidMount() {
    this.props.getUpcomingShipments({
      start: 0,
      limit: 20,
    })
  }

  _keyExtractor = (item) => item.shipment.id.toString()

  _renderItem = ({item}) => (
    <UpcomingShipmentCard shipment={item.shipment} cargo={item.cargo} ship={item.ship} navigation={this.props.navigation} />
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
          onEndReached={() => {
            if (this.props.upcomingShipments.length >= 20 ) {
              this.props.getUpcomingShipments({
                start: this.props.upcomingShipmentsStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.getUpcomingShipments({
            start: this.props.upcomingShipmentsStart,
            limit: 20,
          })}
          refreshing={this.props.upcomingShipmentsIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.upcomingShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.upcomingShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
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
  upcomingShipmentsStart: state.shipment.upcomingShipmentsStart,
  upcomingShipmentsIsLoading: state.shipment.upcomingShipmentsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getUpcomingShipments: (param) => dispatch(ShipmentActions.getUpcomingShipments(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentUpcomingScreen)
