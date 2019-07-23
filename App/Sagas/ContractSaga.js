import { put, call } from 'redux-saga/effects'
import ContractActions from 'App/Stores/Contract/Actions'
import { contractService } from 'App/Services/ContractService'

export function* getContracts(action) {
  yield put(ContractActions.getContractsLoading())

  const contracts = yield call(contractService.getContracts, action.param)
  if (!contracts.error) {
    yield put(ContractActions.getContractsSuccess(contracts))
  } else if (contracts.error) {
    yield put(ContractActions.getContractsFailure(contracts.error))
  } else {
    yield put(ContractActions.getContractsFailure('There was an error while getting contracts'))
  }
}

export function* setContractsStatusSearch(status) {
  yield put(ContractActions.setContractsStatusSearchSuccess(status.type))
}
