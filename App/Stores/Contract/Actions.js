import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get contracts
  getContracts: ['param'],
  getContractsLoading: null,
  getContractsSuccess: ['contracts'],
  getContractsFailure: ['error'],
})

export const ContractTypes = Types
export default Creators
