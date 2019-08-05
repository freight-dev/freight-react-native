import React, { Component } from 'react'
import { FlatList, View, Text, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { CargoCard } from '../../Components/CargoCard'
import { connect } from 'react-redux'
import Style from './ShipmentDetailScreenStyle'
import MapView, { Marker, Callout } from 'react-native-maps'
import Colors from '../../Theme/Colors'
import { OpenSansText } from '../../Components/StyledText'

class ShipmentDetailScreen extends Component {
  componentDidMount() {
    // this.props.getActiveCargos()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    {/*<CargoCard data={item} navigation={this.props.navigation} />*/}
  );

  render() {
    return (
      <View style={Style.container}>
        <StatusBar hidden={true} />
        <MapView
          style={Style.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 1.0922,
            longitudeDelta: 1.0421,
          }}
        >
          <Marker coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,}}
                  pinColor={Colors.main}>
            <Callout>
              <OpenSansText>Origin</OpenSansText>
            </Callout>
          </Marker>
          <Marker coordinate={{
            latitude: 37.68825,
            longitude: -122.4324,}}>
            <Callout>
              <OpenSansText>Destination</OpenSansText>
            </Callout>
          </Marker>
        </MapView>
        <View style={Style.card}>
          <OpenSansText>Test</OpenSansText>
          <OpenSansText>Yes</OpenSansText>
        </View>
      </View>
    )
  }
}

ShipmentDetailScreen.propTypes = {
  // getActiveCargos: PropTypes.func,
  // activeCargos: PropTypes.array,
  // activeCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  // activeCargos: state.cargo.activeCargos,
  // activeCargosIsLoading: state.cargo.activeCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  // getActiveCargos: () => dispatch(CargoActions.getActiveCargos()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentDetailScreen)
