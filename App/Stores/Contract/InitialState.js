import { ALL } from '../../Helper/ContractHelper'

export const INITIAL_STATE = {
  cargoContract: {},
  cargoContractIsLoading: false,
  cargoContractErrorMessage: null,
  contracts: [],
  contractsIsLoading: false,
  contractsStart: 0,
  contractsErrorMessage: null,
  contractsStatusSearch: ALL,
}
