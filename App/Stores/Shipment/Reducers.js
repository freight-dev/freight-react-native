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

export const getUpcomingShipmentsSuccess = (state, { cargoShipment, start  }) => ({
  ...state,
  upcomingShipments: cargoShipment.cargoShipment,
  upcomingShipmentsStart: start,
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

export const getInProgressShipmentsSuccess = (state, { cargoShipment, start  }) => ({
  ...state,
  inProgressShipments: cargoShipment.cargoShipment,
  inProgressShipmentsStart: start,
  inProgressShipmentsIsLoading: false,
  inProgressShipmentsErrorMessage: null,
})

export const getInProgressShipmentsFailure = (state, { error }) => ({
  ...state,
  inProgressShipments: [],
  inProgressShipmentsIsLoading: false,
  inProgressShipmentsErrorMessage: error.error.description,
})

/**
 * Get Completed Shipments
 */
export const getCompletedShipmentsLoading = (state) => ({
  ...state,
  completedShipmentsIsLoading: true,
  completedShipmentsErrorMessage: null,
})

export const getCompletedShipmentsSuccess = (state, { cargoShipment, start  }) => ({
  ...state,
  completedShipments: cargoShipment.cargoShipment,
  completedShipmentsStart: start,
  completedShipmentsIsLoading: false,
  completedShipmentsErrorMessage: null,
})

export const getCompletedShipmentsFailure = (state, { error }) => ({
  ...state,
  completedShipments: [],
  completedShipmentsIsLoading: false,
  completedShipmentsErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_LOADING]: getUpcomingShipmentsLoading,
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_SUCCESS]: getUpcomingShipmentsSuccess,
  [ShipmentTypes.GET_UPCOMING_SHIPMENTS_FAILURE]: getUpcomingShipmentsFailure,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_LOADING]: getInProgressShipmentsLoading,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_SUCCESS]: getInProgressShipmentsSuccess,
  [ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS_FAILURE]: getInProgressShipmentsFailure,
  [ShipmentTypes.GET_COMPLETED_SHIPMENTS_LOADING]: getCompletedShipmentsLoading,
  [ShipmentTypes.GET_COMPLETED_SHIPMENTS_SUCCESS]: getCompletedShipmentsSuccess,
  [ShipmentTypes.GET_COMPLETED_SHIPMENTS_FAILURE]: getCompletedShipmentsFailure,
})
