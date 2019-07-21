import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get config information
  getConfig: null,
  // The operation has started and is loading
  getConfigLoading: null,
  // Get information were successfully fetched
  getConfigSuccess: ['config'],
  // An error occurred
  getConfigFailure: ['error'],
})

export const ConfigTypes = Types
export default Creators
