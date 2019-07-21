import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PortTypes } from './Actions'

export const getPortLoading = (state) => ({
  ...state,
  portIsLoading: true,
  portErrorMessage: null,
})

export const getPortSuccess = (state, { ports }) => ({
  ...state,
  ports: ports.ports,
  portIsLoading: false,
  portErrorMessage: null,
})

export const getPortFailure = (state, { error }) => ({
  ...state,
  ports: [],
  portIsLoading: false,
  portErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [PortTypes.GET_PORT_LOADING]: getPortLoading,
  [PortTypes.GET_PORT_SUCCESS]: getPortSuccess,
  [PortTypes.GET_PORT_FAILURE]: getPortFailure,
})
