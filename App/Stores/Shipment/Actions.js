import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get upcoming shipment
  getUpcomingShipments: [],
  getUpcomingShipmentsLoading: null,
  getUpcomingShipmentsSuccess: ['cargoShipment'],
  getUpcomingShipmentsFailure: ['error'],
  // Get in progress shipment
  getInProgressShipments: [],
  getInProgressShipmentsLoading: null,
  getInProgressShipmentsSuccess: ['cargoShipment'],
  getInProgressShipmentsFailure: ['error'],
})

export const ShipmentTypes = Types
export default Creators
