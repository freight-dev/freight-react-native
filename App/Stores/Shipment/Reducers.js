import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ShipmentTypes } from './Actions'

/**
 * Get Upcoming Shipments
 */
export const getUpcomingShipmentsLoading = (state) => ({
  ...state,
  upcomingShipmentsIsLoading: true,
  upcomingShipmentsErrorMessage: null,
})

export const getUpcomingShipmentsSuccess = (state, { cargoShipment }) => ({
  ...state,
  upcomingShipments: cargoShipment.cargoShipment,
  upcomingShipmentsIsLoading: false,
  upcomingShipmentsErrorMessage: null,
})

export const getUpcomingShipmentsFailure = (state, { error }) => ({
  ...state,
  upcomingShipments: [],
  upcomingShipmentsIsLoading: false,
  upcomingShipmentsErrorMessage: error.error.description,
})

/**
 * Get In Progress Shipments
 */
export const getInProgressShipmentsLoading = (state) => ({
  ...state,
  inProgressShipmentsIsLoading: true,
  inProgressShipmentsErrorMessage: null,
})

export const getInProgressShipmentsSuccess = (state, { cargoShipment }) => ({
  ...state,
  inProgressShipments: cargoShipment.cargoShipment,
  inProgressShipmentsIsLoading: false,
  inProgressShipmentsErrorMessage: null,
})

export const getInProgressShipmentsFailure = (state, { error }) => ({
  ...state,
  inProgressShipments: [],
  inProgressShipmentsIsLoading: false,
  inProgressShipmentsErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_LOADING]: getUpcomingShipmentsLoading,
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_SUCCESS]: getUpcomingShipmentsSuccess,
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_FAILURE]: getUpcomingShipmentsFailure,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_LOADING]: getInProgressShipmentsLoading,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_SUCCESS]: getInProgressShipmentsSuccess,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_FAILURE]: getInProgressShipmentsFailure,
})
