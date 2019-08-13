import React, { Component } from 'react'
import { FlatList, View, Text, StatusBar } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { CargoCard } from '../../Components/CargoCard'
import { connect } from 'react-redux'
import Style from './InquiryActiveScreenStyle'

class InquiryActiveScreen extends Component {
  componentDidMount() {
    this.props.getActiveCargos({
        start: 0,
        limit: 20,
    })
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <CargoCard data={item} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.activeCargosIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.activeCargos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={() => {
            if (this.props.activeCargos.length >= 20 ) {
              this.props.getActiveCargos({
                start: this.props.activeCargosStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.getActiveCargos({
            start: this.props.activeCargosStart,
            limit: 20,
          })}
          refreshing={this.props.activeCargosIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.activeCargos > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.activeCargos > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
        />
      </View>
    )
  }
}

InquiryActiveScreen.propTypes = {
  getActiveCargos: PropTypes.func,
  activeCargos: PropTypes.array,
  activeCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  activeCargos: state.cargo.activeCargos,
  activeCargosStart: state.cargo.activeCargosStart,
  activeCargosIsLoading: state.cargo.activeCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getActiveCargos: (param) => dispatch(CargoActions.getActiveCargos(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryActiveScreen)
