import { select, put, call } from 'redux-saga/effects'
import CargoActions from 'App/Stores/Cargo/Actions'
import { cargoService } from 'App/Services/CargoService'
import NavigationService from '../Services/NavigationService'

export function* postCargo(action) {
  yield put(CargoActions.postCargoLoading())

  const state = yield select();
  console.log(JSON.stringify(state.auth))
  const cargo = yield call(cargoService.postCargo, action.payload, state.auth.token)
  if (!cargo.error) {
    yield put(CargoActions.postCargoSuccess(cargo))
    const payload = {
      start: 0,
      limit: 20,
    }
    yield put(CargoActions.getActiveCargos(payload))
    NavigationService.navigate('InquiryScreen')
  } else if (cargo.error) {
    yield put(CargoActions.postCargoFailure(cargo.error))
  } else {
    yield put(CargoActions.postCargoFailure('There was an error while submitting cargo'))
  }
}

export function* getActiveCargos(action) {
  yield put(CargoActions.getActiveCargosLoading())

  const state = yield select();
  const cargos = yield call(cargoService.getActiveCargos, action.param, state.auth.token)
  if (!cargos.error) {
    yield put(CargoActions.getActiveCargosSuccess(cargos, action.param.start))
  } else if (cargos.error) {
    yield put(CargoActions.getActiveCargosFailure(cargos.error))
  } else {
    yield put(CargoActions.getActiveCargosFailure('There was an error while getting active cargos'))
  }
}

export function* getHistoryCargos(action) {
  yield put(CargoActions.getHistoryCargosLoading())

  const state = yield select();
  const cargos = yield call(cargoService.getHistoryCargos, action.param, state.auth.token)
  if (!cargos.error) {
    yield put(CargoActions.getHistoryCargosSuccess(cargos, action.param.start))
  } else if (cargos.error) {
    yield put(CargoActions.getHistoryCargosFailure(cargos.error))
  } else {
    yield put(CargoActions.getHistoryCargosFailure('There was an error while getting cargos history'))
  }
}

export function* searchCargos(action) {
  yield put(CargoActions.searchCargosLoading())

  const state = yield select();
  const cargos = yield call(cargoService.searchCargos, action.param, state.auth.token)
  if (!cargos.error) {
    yield put(CargoActions.searchCargosSuccess(cargos, action.param.start))
  } else if (cargos.error) {
    yield put(CargoActions.searchCargosFailure(cargos.error))
  } else {
    yield put(CargoActions.searchCargosFailure('There was an error while searching cargos'))
  }
}
