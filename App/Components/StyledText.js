import React from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types'

export class OpenSansText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans' }]} />
  }
}

export class OpenSansLightText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-Light' }]} />
  }
}

export class OpenSansItalicText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-Italic' }]} />
  }
}

export class OpenSansLightItalicText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-LightItalic' }]} />
    )
  }
}

export class OpenSansBoldText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-Bold' }]} />
  }
}

export class OpenSansExtraBoldText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-ExtraBold' }]} />
    )
  }
}

OpenSansText.propTypes = {
  style: PropTypes.object,
}

OpenSansLightText.propTypes = {
  style: PropTypes.object,
}

OpenSansItalicText.propTypes = {
  style: PropTypes.object,
}

OpenSansLightItalicText.propTypes = {
  style: PropTypes.object,
}

OpenSansBoldText.propTypes = {
  style: PropTypes.object,
}

OpenSansExtraBoldText.propTypes = {
  style: PropTypes.object,
}
