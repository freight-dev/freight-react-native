import React from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { OpenSansText } from '../StyledText'
import { GiftedFormManager } from 'react-native-gifted-form'

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

function _onPress(location, data, details) {
  let country = null
  let administrative_area_level_1 = null
  let administrative_area_level_2 = null
  let administrative_area_level_3 = null
  let administrative_area_level_4 = null
  let locality = null
  let route = null
  details.address_components.forEach(address => {
    address.types.forEach(type => {
      switch (type) {
        case "administrative_area_level_1":
          administrative_area_level_1 = address.long_name
          break
        case "administrative_area_level_2":
          administrative_area_level_2 = address.long_name
          break
        case "administrative_area_level_3":
          administrative_area_level_3 = address.long_name
          break
        case "administrative_area_level_4":
          administrative_area_level_4 = address.long_name
          break
        case "locality":
          locality = address.long_name
          break
        case "country":
          country = address.long_name
          break
        case "route":
          route = address.long_name
          break
        default:
          break
      }
    })
  })

  GiftedFormManager.updateValue('cargo', location + 'MainName', data.structured_formatting.main_text)
  GiftedFormManager.updateValue('cargo', location + 'SecondaryName', data.structured_formatting.secondary_text)
  GiftedFormManager.updateValue('cargo', location + 'Id', details.id)
  GiftedFormManager.updateValue('cargo', location + 'Lat', details.geometry.location.lat)
  GiftedFormManager.updateValue('cargo', location + 'Lon', details.geometry.location.lng)
  GiftedFormManager.updateValue('cargo', location + 'Route', route)
  GiftedFormManager.updateValue('cargo', location + 'Locality', locality)
  GiftedFormManager.updateValue('cargo', location + 'AdministrativeAreaLevel_4', administrative_area_level_4)
  GiftedFormManager.updateValue('cargo', location + 'AdministrativeAreaLevel_3', administrative_area_level_3)
  GiftedFormManager.updateValue('cargo', location + 'AdministrativeAreaLevel_2', administrative_area_level_2)
  GiftedFormManager.updateValue('cargo', location + 'AdministrativeAreaLevel_1', administrative_area_level_1)
  GiftedFormManager.updateValue('cargo', location + 'Country', country)
  GiftedFormManager.updateValue('cargo', location + 'Location', location)
}

export const GooglePlacesInput = ({location}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={3} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed={false}    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details) => _onPress(location, data, details)}
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: '',
        language: 'id', // language of the results
         // types: 'geocode', // default: 'geocode'
        components: 'country:ID',
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
      // currentLocationLabel="Current location"
      // nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      // GoogleReverseGeocodingQuery={{
      //   // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      // }}
      // GooglePlacesSearchQuery={{
      //   // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      //   rankby: 'distance',
      //   type: 'transit_station',
      // }}

      // GooglePlacesDetailsQuery={{
      //   // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
      //   // fields: 'formatted_address',
      // }}

      filterReverseGeocodingByTypes={['establishment', 'sublocality', 'locality', 'administrative_area_level_1', 'administrative_area_level_2', 'administrative_area_level_3', 'administrative_area_level_4']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      // predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={()  => <OpenSansText>From</OpenSansText>}
    />
  );
}
