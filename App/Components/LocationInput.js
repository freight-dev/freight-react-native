// import React, { Fragment } from 'react'
// import { groupBy, map } from 'lodash'
// import { Typeahead, Menu, MenuItem, Highlighter } from 'react-bootstrap-typeahead'
// import { PropTypes } from 'prop-types'
// import { ActivityIndicator } from 'react-native'
//
// export class LocationInput extends React.Component {
//
//   _renderMenu = (results, menuProps) => {
//     let idx = 0;
//     const grouped = groupBy(results, (r) => r.city);
//     const items = Object.keys(grouped).sort().map((city) => [
//       !!idx && <Menu.Divider key={`${city}-divider`} />,
//       <Menu.Header key={`${city}-header`}>
//         {city}
//       </Menu.Header>,
//       map(grouped[city], (port) => {
//         const item =
//           <MenuItem key={idx} option={port} position={idx}>
//             <Highlighter search={menuProps.text}>
//               {port.name}
//             </Highlighter>
//           </MenuItem>;
//
//         idx++; /* eslint-disable-line no-plusplus */
//         return item;
//       }),
//     ]);
//
//     return <Menu {...menuProps}>{items}</Menu>;
//   }
//
//   render() {
//
//     const props = {
//       renderMenu : this._renderMenu,
//       disabled: false,
//       flip: false,
//       highlightOnlyResult: false,
//       minLength: 0,
//       open: undefined,
//       selectHintOnEnter: false,
//     };
//     return (
//       this.props.portIsLoading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <Fragment>
//             <Typeahead
//               {...props}
//               id="city"
//               labelKey="name"
//               options={this.props.ports}
//               placeholder="Choose a city..."
//               onChange={(value) => {
//                 if (this.props.type === "origin") {
//                   this.props.values.origin = value[0]
//                 } else if (this.props.type === "destination") {
//                   this.props.values.destination = value[0]
//                 }
//               }}
//             />
//           </Fragment>
//       )
//     );
//   }
// }
//
// LocationInput.propTypes = {
//   ports: PropTypes.array,
// }
