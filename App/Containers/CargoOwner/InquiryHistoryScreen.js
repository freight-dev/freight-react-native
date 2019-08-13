import React, { Component } from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import CargoActions from '../../Stores/Cargo/Actions'
import { connect } from 'react-redux'
import { CargoHistoryCard } from '../../Components/CargoHistoryCard'
import Style from './InquiryHistoryScreenStyle'

class InquiryHistoryScreen extends Component {
  componentDidMount() {
    this.props.getHistoryCargos({
      start: 0,
      limit: 20,
    })
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({item}) => (
    <CargoHistoryCard data={item} navigation={this.props.navigation} />
  );

  render() {
    if (this.props.historyCargosIsLoading) {
      return null
    }
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        <FlatList
          data={this.props.historyCargos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReached={() => {
            if (this.props.getHistoryCargos.length >= 20 ) {
              this.props.getHistoryCargos({
                start: this.props.historyCargosStart,
                limit: 20,
              })
            }
          }}
          onEndReachedThreshold={0.5}
          onRefresh={() => this.props.getHistoryCargos({
            start: this.props.historyCargosStart,
            limit: 20,
          })}
          refreshing={this.props.historyCargosIsLoading}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => {
            if (this.props.historyCargos > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
          onLayout={() => {
            if (this.props.historyCargos > 0) this.flatList.scrollToIndex({ animated: true, index: 0 });
          }}
        />
      </View>
    )
  }
}

InquiryHistoryScreen.propTypes = {
  getHistoryCargos: PropTypes.func,
  historyCargos: PropTypes.array,
  historyCargosIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  historyCargos: state.cargo.historyCargos,
  historyCargosIsLoading: state.cargo.historyCargosIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getHistoryCargos: (param) => dispatch(CargoActions.getHistoryCargos(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InquiryHistoryScreen)
