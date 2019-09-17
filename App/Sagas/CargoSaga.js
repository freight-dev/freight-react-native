import { select, put, call } from 'redux-saga/effects'
import CargoActions from 'App/Stores/Cargo/Actions'
import { cargoService } from 'App/Services/CargoService'
import { authService } from '../Services/AuthService'
import AsyncStorage from 'react-native-web/src/exports/AsyncStorage'

export function* postCargo(action) {
  yield put(CargoActions.postCargoLoading())

  const cargo = yield call(cargoService.postCargo, action.payload, token)
  if (!cargo.error) {
    yield put(CargoActions.postCargoSuccess(cargo))
  } else if (cargo.error) {
    yield put(CargoActions.postCargoFailure(cargo.error))
  } else {
    yield put(CargoActions.postCargoFailure('There was an error while submitting cargo'))
  }
}

export function* getActiveCargos(action) {
  yield put(CargoActions.getActiveCargosLoading())

  while(true) {
    const state = yield select();
    console.log("State: " + JSON.stringify(state.auth))
  }

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
