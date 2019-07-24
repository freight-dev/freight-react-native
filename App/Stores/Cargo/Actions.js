import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Post cargo
  postCargo: ['payload'],
  postCargoLoading: null,
  postCargoSuccess: ['cargo'],
  postCargoFailure: ['error'],

  // Get active cargo
  getActiveCargos: [],
  getActiveCargosLoading: null,
  getActiveCargosSuccess: ['cargos'],
  getActiveCargosFailure: ['error'],

  // Get history cargo
  getHistoryCargos: [],
  getHistoryCargosLoading: null,
  getHistoryCargosSuccess: ['cargos'],
  getHistoryCargosFailure: ['error'],
})

export const CargoTypes = Types
export default Creators
