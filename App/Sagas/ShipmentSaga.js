import { put, call } from 'redux-saga/effects'
import ShipmentActions from 'App/Stores/Shipment/Actions'
import { shipmentService } from 'App/Services/ShipmentService'
import { authService } from '../Services/AuthService'

export function* getUpcomingShipments(action) {
  yield put(ShipmentActions.getUpcomingShipmentsLoading())

  const token = yield call(authService.getToken)
  const cargoShipment = yield call(shipmentService.getUpcomingShipments, action.param, token)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getUpcomingShipmentsSuccess(cargoShipment, action.param.start))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getUpcomingShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getUpcomingShipmentsFailure('There was an error while getting upcoming shipments'))
  }
}

export function* getInProgressShipments(action) {
  yield put(ShipmentActions.getInProgressShipmentsLoading())

  const token = yield call(authService.getToken)
  const cargoShipment = yield call(shipmentService.getInProgressShipments, action.param, token)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getInProgressShipmentsSuccess(cargoShipment, action.param.start))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getInProgressShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getInProgressShipmentsFailure('There was an error while getting in progress shipments'))
  }
}

export function* getCompletedShipments(action) {
  yield put(ShipmentActions.getCompletedShipmentsLoading())

  const token = yield call(authService.getToken)
  const cargoShipment = yield call(shipmentService.getCompletedShipments, action.param, token)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getCompletedShipmentsSuccess(cargoShipment, action.param.start))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getCompletedShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getCompletedShipmentsFailure('There was an error while getting completed shipments'))
  }
}
