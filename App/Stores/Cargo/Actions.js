import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Post cargo
  postCargo: ['payload', 'token'],
  postCargoLoading: null,
  postCargoSuccess: ['cargo'],
  postCargoFailure: ['error'],

  // Get active cargo
  getActiveCargos: ['param', 'token'],
  getActiveCargosLoading: null,
  getActiveCargosSuccess: ['cargos', 'start'],
  getActiveCargosFailure: ['error'],

  // Get history cargo
  getHistoryCargos: ['param', 'token'],
  getHistoryCargosLoading: null,
  getHistoryCargosSuccess: ['cargos', 'start'],
  getHistoryCargosFailure: ['error'],
})

export const CargoTypes = Types
export default Creators
