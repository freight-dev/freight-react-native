export const shipStatus = ['Origin', 'Loading', 'At sea', 'Discharge', 'Destination']

export const mapShipStatus = (status) => {
  switch (status) {
    case 'DOCKING_ORIGIN':
      return shipStatus.indexOf('Origin')
    case 'LOADING':
      return shipStatus.indexOf('Loading')
    case 'AT_SEA':
      return shipStatus.indexOf('At sea')
    case 'DISCHARGE':
      return shipStatus.indexOf('Discharge')
    case 'DOCKING_DESTINATION':
      return shipStatus.indexOf('Destination')
    default:
      return null
  }
}
