import { put, call, select } from 'redux-saga/effects'
import ContractActions from 'App/Stores/Contract/Actions'
import { contractService } from 'App/Services/ContractService'
import { CUSTOMER_ACCEPTED, CUSTOMER_DECLINED } from '../Helper/ContractHelper'
import ShipmentActions from '../Stores/Shipment/Actions'
import NavigationService from '../Services/NavigationService'

export function* updateContractStatus(action) {
  yield put(ContractActions.updateContractStatusLoading())

  const state = yield select();
  const cargoContract = yield call(contractService.updateContractStatus, action.param, state.auth.token)
  if (!cargoContract.error) {
    yield put(ContractActions.updateContractStatusSuccess(cargoContract))
    if (action.param.status === CUSTOMER_DECLINED) {
      const payload = {
        cargoId: action.cargoId,
        start: 0,
        limit: 20,
      }
      yield put(ContractActions.getContracts(payload))
      NavigationService.navigate('CargoContractScreen')
    } else if (action.param.status === CUSTOMER_ACCEPTED) {
      const payload = {
        start: 0,
        limit: 20,
      }
      yield put(ShipmentActions.getUpcomingShipments(payload))
      NavigationService.navigate('ShipmentUpcomingScreen')
    }
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
