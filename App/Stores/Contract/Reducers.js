import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ContractTypes } from './Actions'

/**
 * Get Contracts
 */
export const getContractsLoading = (state) => ({
  ...state,
  contractsIsLoading: true,
  contractsErrorMessage: null,
})

export const getContractsSuccess = (state, { contracts }) => ({
  ...state,
  contracts: contracts.contracts,
  contractsIsLoading: false,
  contractsErrorMessage: null,
})

export const getContractsFailure = (state, { error }) => ({
  ...state,
  contracts: [],
  contractsIsLoading: false,
  contractsErrorMessage: error.error.description,
})

export const setContractsStatusSearchSuccess = (state, { status }) => ({
  ...state,
  contractsStatusSearch: status,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ContractTypes.GET_CONTRACTS_LOADING]: getContractsLoading,
  [ContractTypes.GET_CONTRACTS_SUCCESS]: getContractsSuccess,
  [ContractTypes.GET_CONTRACTS_FAILURE]: getContractsFailure,
  [ContractTypes.SET_CONTRACTS_STATUS_SEARCH]: setContractsStatusSearchSuccess,
})
