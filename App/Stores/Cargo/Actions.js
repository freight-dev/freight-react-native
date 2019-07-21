import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Post cargo
  postCargo: ['payload'],
  postCargoLoading: null,
  postCargoSuccess: ['cargo'],
  postCargoFailure: ['error'],

  // Get cargo
  getActiveCargos: [],
  getActiveCargosLoading: null,
  getActiveCargosSuccess: ['cargos'],
  getActiveCargosFailure: ['error'],
})

export const CargoTypes = Types
export default Creators
