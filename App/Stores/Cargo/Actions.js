import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Post cargo
  postCargo: ['payload'],
  postCargoLoading: null,
  postCargoSuccess: ['cargo'],
  postCargoFailure: ['error'],

  // Get active cargo
  getActiveCargos: ['param'],
  getActiveCargosLoading: null,
  getActiveCargosSuccess: ['cargos', 'start'],
  getActiveCargosFailure: ['error'],

  // Get history cargo
  getHistoryCargos: ['param'],
  getHistoryCargosLoading: null,
  getHistoryCargosSuccess: ['cargos', 'start'],
  getHistoryCargosFailure: ['error'],
})

export const CargoTypes = Types
export default Creators
