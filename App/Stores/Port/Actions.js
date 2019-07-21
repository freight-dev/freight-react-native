import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Get config information
  getPort: null,
  // The operation has started and is loading
  getPortLoading: null,
  // Get information were successfully fetched
  getPortSuccess: ['ports'],
  // An error occurred
  getPortFailure: ['error'],
})

export const PortTypes = Types
export default Creators
