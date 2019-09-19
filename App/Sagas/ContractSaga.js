import { put, call, select } from 'redux-saga/effects'
import ContractActions from 'App/Stores/Contract/Actions'
import { contractService } from 'App/Services/ContractService'
import { authService } from '../Services/AuthService'

export function* updateContractStatus(action) {
  yield put(ContractActions.updateContractStatusLoading())

  const state = yield select();
  const cargoContract = yield call(contractService.updateContractStatus, action.param, state.auth.token)
  if (!cargoContract.error) {
    yield put(ContractActions.updateContractStatusSuccess(cargoContract))
  } else if (cargoContract.error) {
    yield put(ContractActions.updateContractStatusFailure(cargoContract.error))
  } else {
    yield put(ContractActions.updateContractStatusFailure('There was an error while updating contract status'))
  }
}

export function* getContracts(action) {
  yield put(ContractActions.getContractsLoading())

  const state = yield select();
  const contracts = yield call(contractService.getContracts, action.param, state.auth.token)
  if (!contracts.error) {
    yield put(ContractActions.getContractsSuccess(contracts, action.param.start))
  } else if (contracts.error) {
    yield put(ContractActions.getContractsFailure(contracts.error))
  } else {
    yield put(ContractActions.getContractsFailure('There was an error while getting contracts'))
  }
}

export function* setContractsStatusSearch(status) {
  yield put(ContractActions.setContractsStatusSearchSuccess(status.type))
}
