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
import { ShipmentDetailCard } from '../../Components/ShipmentDetailCard'
import Entypo from 'react-native-vector-icons/Entypo'

const mapStyle= []
// const mapStyle = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#f8f8f8"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#fafafa"
//       },
//       {
//         "lightness": -10
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dadada"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c9c9c9"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#336699"
//       },
//       {
//         "lightness": 80
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   }
// ]

class ShipmentDetailScreen extends Component {
  componentDidMount() {
    // this.props.getActiveCargos()
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    {/*<CargoCard data={item} navigation={this.props.navigation} />*/}
  );

  render() {
    const cargo = this.props.navigation.getParam('cargo')
    const shipment = this.props.navigation.getParam('shipment')

    return (
      <View style={Style.container}>
        <StatusBar hidden={true} />
        <MapView
          customMapStyle={mapStyle}
          style={Style.map}
          initialRegion={{
            latitude: (shipment.origin.lat + shipment.destination.lat) / 2,
            longitude: (shipment.origin.lon + shipment.destination.lon) / 2,
            latitudeDelta: Math.abs(shipment.origin.lat - shipment.destination.lat) * 1.5,
            longitudeDelta: Math.abs(shipment.origin.lon - shipment.destination.lon) * 1.5,
          }}
        >
          <Marker coordinate={{
            latitude: shipment.origin.lat,
            longitude: shipment.origin.lon}}>
            <Entypo name="location-pin" size={40} color={Colors.main} style={{marginTop: 20}}/>
            <Callout>
              <OpenSansText>Origin</OpenSansText>
            </Callout>
          </Marker>
          <Marker coordinate={{
            latitude: shipment.destination.lat,
            longitude: shipment.destination.lon}}>
            <Entypo name="location-pin" size={40} color={Colors.red} style={{marginTop: 20}}/>
            <Callout>
              <OpenSansText>Destination</OpenSansText>
            </Callout>
          </Marker>
        </MapView>
        <View style={Style.card}>
          <ShipmentDetailCard
            navigation={this.props.navigation}
            cargo={cargo}
            shipment={shipment} />
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
