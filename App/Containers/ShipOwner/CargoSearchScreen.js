import React, { Component } from 'react'
import { FlatList, View, Text, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { CargoCard } from '../../Components/CargoCard'
import { connect } from 'react-redux'
import Style from './CargoSearchScreenStyle'

class CargoSearchScreen extends Component {
  componentDidMount() {
    this.props.searchCargos({
        start: 0,
        limit: 20,
    })
  }

  _keyExtractor = (item) => item.id.toString()

  _renderItem = ({item}) => (
    <CargoCard data={item} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.searchCargosIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.searchedCargos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={() => {
            if (this.props.searchedCargos.length >= 20 ) {
              this.props.searchCargos({
                start: this.props.searchCargosStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.searchCargos({
            start: this.props.searchCargosStart,
            limit: 20,
          })}
          refreshing={this.props.searchCargosIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.searchedCargos.length > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.searchedCargos.length > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
        />
      </View>
    )
  }
}

CargoSearchScreen.propTypes = {
  searchCargos: PropTypes.func,
  searchedCargos: PropTypes.array,
  searchCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  searchedCargos: state.cargo.searchedCargos,
  searchCargosStart: state.cargo.searchCargosStart,
  searchCargosIsLoading: state.cargo.searchCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  searchCargos: (param) => dispatch(CargoActions.searchCargos(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoSearchScreen)
