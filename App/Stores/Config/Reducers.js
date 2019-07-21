import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ConfigTypes } from './Actions'

export const getConfigLoading = (state) => ({
  ...state,
  configIsLoading: true,
  configErrorMessage: null,
})

export const getConfigSuccess = (state, { config }) => ({
  ...state,
  cargoTypes: config.cargoTypes,
  bulkTypes: config.bulkTypes,
  containerTypes: config.containerTypes,
  weightUnits: config.weightUnits,
  volumeUnits: config.volumeUnits,
  dimensionUnits: config.dimensionUnits,
  configIsLoading: false,
  configErrorMessage: null,
})

export const getConfigFailure = (state, { error }) => ({
  ...state,
  config: {},
  configIsLoading: false,
  configErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ConfigTypes.GET_CONFIG_LOADING]: getConfigLoading,
  [ConfigTypes.GET_CONFIG_SUCCESS]: getConfigSuccess,
  [ConfigTypes.GET_CONFIG_FAILURE]: getConfigFailure,
})
