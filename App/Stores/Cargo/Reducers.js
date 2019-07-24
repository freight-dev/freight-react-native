import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CargoTypes } from './Actions'

/**
 * Post Cargo
 */
export const postCargoLoading = (state) => ({
  ...state,
  cargoIsLoading: true,
  cargoErrorMessage: null,
})

export const postCargoSuccess = (state, { cargo }) => ({
  ...state,
  cargo: cargo.cargo,
  cargoIsLoading: false,
  cargoErrorMessage: null,
})

export const postCargoFailure = (state, { error }) => ({
  ...state,
  cargo: {},
  cargoIsLoading: false,
  cargoErrorMessage: error.error.description,
})

/**
 * Get active cargo list
 */
export const getActiveCargosLoading = (state) => ({
  ...state,
  activeCargosIsLoading: true,
  activeCargosErrorMessage: null,
})

export const getActiveCargosSuccess = (state, { cargos }) => ({
  ...state,
  activeCargos: cargos.cargos,
  activeCargosIsLoading: false,
  activeCargosErrorMessage: null,
})

export const getActiveCargosFailure = (state, { error }) => ({
  ...state,
  activeCargos: [],
  activeCargosIsLoading: false,
  activeCargosErrorMessage: error.error.description,
})

/**
 * Get history cargo list
 */
export const getHistoryCargosLoading = (state) => ({
  ...state,
  historyCargosIsLoading: true,
  historyCargosErrorMessage: null,
})

export const getHistoryCargosSuccess = (state, { cargos }) => ({
  ...state,
  historyCargos: cargos.cargos,
  historyCargosIsLoading: false,
  historyCargosErrorMessage: null,
})

export const getHistoryCargosFailure = (state, { error }) => ({
  ...state,
  historyCargos: [],
  historyCargosIsLoading: false,
  historyCargosErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [CargoTypes.POST_CARGO_LOADING]: postCargoLoading,
  [CargoTypes.POST_CARGO_SUCCESS]: postCargoSuccess,
  [CargoTypes.POST_CARGO_FAILURE]: postCargoFailure,
  [CargoTypes.GET_ACTIVE_CARGOS_LOADING]: getActiveCargosLoading,
  [CargoTypes.GET_ACTIVE_CARGOS_SUCCESS]: getActiveCargosSuccess,
  [CargoTypes.GET_ACTIVE_CARGOS_FAILURE]: getActiveCargosFailure,
  [CargoTypes.GET_HISTORY_CARGOS_LOADING]: getHistoryCargosLoading,
  [CargoTypes.GET_HISTORY_CARGOS_SUCCESS]: getHistoryCargosSuccess,
  [CargoTypes.GET_HISTORY_CARGOS_FAILURE]: getHistoryCargosFailure,
})
