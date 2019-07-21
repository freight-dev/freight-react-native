import { put, call } from 'redux-saga/effects'
import CargoActions from 'App/Stores/Cargo/Actions'
import { cargoService } from 'App/Services/CargoService'

export function* postCargo(action) {
  yield put(CargoActions.postCargoLoading())

  const cargo = yield call(cargoService.postCargo, action.payload)
  if (!cargo.error) {
    yield put(CargoActions.postCargoSuccess(cargo))
  } else if (cargo.error) {
    yield put(CargoActions.postCargoFailure(cargo.error))
  } else {
    yield put(CargoActions.postCargoFailure('There was an error while submitting cargo'))
  }
}

export function* getActiveCargos() {
  yield put(CargoActions.getActiveCargosLoading())

  const cargos = yield call(cargoService.getActiveCargos)
  if (!cargos.error) {
    yield put(CargoActions.getActiveCargosSuccess(cargos))
  } else if (cargos.error) {
    yield put(CargoActions.getActiveCargosFailure(cargos.error))
  } else {
    yield put(CargoActions.getActiveCargosFailure('There was an error while getting active cargos'))
  }
}
