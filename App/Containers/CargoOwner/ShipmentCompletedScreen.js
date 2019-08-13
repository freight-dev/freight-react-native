import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ShipmentActions from '../../Stores/Shipment/Actions'
import Style from './ShipmentCompletedScreenStyle'
import { CompletedShipmentCard } from '../../Components/CompletedShipmentCard'

class ShipmentCompletedScreen extends Component {
  componentDidMount() {
    this.props.getCompletedShipments({
      start: 0,
      limit: 20,
    })
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <CompletedShipmentCard shipment={item.shipment} cargo={item.cargo} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.completedShipmentsIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.completedShipments}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={() => {
            if (this.props.completedShipments.length >= 20 ) {
              this.props.getCompletedShipments({
                start: this.props.completedShipmentsStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.getCompletedShipments({
            start: this.props.completedShipmentsStart,
            limit: 20,
          })}
          refreshing={this.props.completedShipmentsIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.completedShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.completedShipments > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
        />
      </View>
    )
  }
}

ShipmentCompletedScreen.propTypes = {
  getCompletedShipments: PropTypes.func,
  completedShipments: PropTypes.array,
  completedShipmentsIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  completedShipments: state.shipment.completedShipments,
  completedShipmentsIsLoading: state.shipment.completedShipmentsIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getCompletedShipments: (param) => dispatch(ShipmentActions.getCompletedShipments(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentCompletedScreen)
