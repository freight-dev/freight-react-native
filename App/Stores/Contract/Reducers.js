import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ContractTypes } from './Actions'

/**
 * Update Contract Status
 */
export const updateContractStatusLoading = (state) => ({
  ...state,
  cargoContractIsLoading: true,
  cargoContractErrorMessage: null,
})

export const updateContractStatusSuccess = (state, { cargoContract }) => ({
  ...state,
  cargoContract: cargoContract.cargoContract,
  cargoContractIsLoading: false,
  cargoContractErrorMessage: null,
})

export const updateContractStatusFailure = (state, { error }) => ({
  ...state,
  cargoContract: {},
  cargoContractIsLoading: false,
  cargoContractErrorMessage: error.error.description,
})

/**
 * Get Contracts
 */
export const getContractsLoading = (state) => ({
  ...state,
  contractsIsLoading: true,
  contractsErrorMessage: null,
})

export const getContractsSuccess = (state, { contracts, start }) => ({
  ...state,
  contracts: contracts.contracts,
  contractsIsLoading: false,
  contractsStart: start,
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
  [ContractTypes.UPDATE_CONTRACT_STATUS_LOADING]: updateContractStatusLoading,
  [ContractTypes.UPDATE_CONTRACT_STATUS_SUCCESS]: updateContractStatusSuccess,
  [ContractTypes.UPDATE_CONTRACT_STATUS_FAILURE]: updateContractStatusFailure,
  [ContractTypes.GET_CONTRACTS_LOADING]: getContractsLoading,
  [ContractTypes.GET_CONTRACTS_SUCCESS]: getContractsSuccess,
  [ContractTypes.GET_CONTRACTS_FAILURE]: getContractsFailure,
  [ContractTypes.SET_CONTRACTS_STATUS_SEARCH]: setContractsStatusSearchSuccess,
})
