import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get upcoming shipment
  getUpcomingShipments: ['param'],
  getUpcomingShipmentsLoading: null,
  getUpcomingShipmentsSuccess: ['cargoShipment', 'start'],
  getUpcomingShipmentsFailure: ['error'],
  // Get in progress shipment
  getInProgressShipments: ['param'],
  getInProgressShipmentsLoading: null,
  getInProgressShipmentsSuccess: ['cargoShipment', 'start'],
  getInProgressShipmentsFailure: ['error'],
  // Get completed shipment
  getCompletedShipments: ['param'],
  getCompletedShipmentsLoading: null,
  getCompletedShipmentsSuccess: ['cargoShipment', 'start'],
  getCompletedShipmentsFailure: ['error'],
})

export const ShipmentTypes = Types
export default Creators
