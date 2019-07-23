import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get contracts
  getContracts: ['param'],
  getContractsLoading: null,
  getContractsSuccess: ['contracts'],
  getContractsFailure: ['error'],
  setContractsStatusSearch: ['status'],
  setContractsStatusSearchSuccess: ['status']
})

export const ContractTypes = Types
export default Creators
