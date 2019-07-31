import { put, call } from 'redux-saga/effects'
import ShipmentActions from 'App/Stores/Shipment/Actions'
import { shipmentService } from 'App/Services/ShipmentService'

export function* getUpcomingShipments() {
  yield put(ShipmentActions.getUpcomingShipmentsLoading())

  const cargoShipment = yield call(shipmentService.getUpcomingShipments)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getUpcomingShipmentsSuccess(cargoShipment))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getUpcomingShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getUpcomingShipmentsFailure('There was an error while getting upcoming shipments'))
  }
}

export function* getInProgressShipments() {
  yield put(ShipmentActions.getInProgressShipmentsLoading())

  const cargoShipment = yield call(shipmentService.getInProgressShipments)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getInProgressShipmentsSuccess(cargoShipment))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getInProgressShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getInProgressShipmentsFailure('There was an error while getting in progress shipments'))
  }
}

export function* getCompletedShipments() {
  yield put(ShipmentActions.getCompletedShipmentsLoading())

  const cargoShipment = yield call(shipmentService.getCompletedShipments)
  if (!cargoShipment.error) {
    yield put(ShipmentActions.getCompletedShipmentsSuccess(cargoShipment))
  } else if (cargoShipment.error) {
    yield put(ShipmentActions.getCompletedShipmentsFailure(cargoShipment.error))
  } else {
    yield put(ShipmentActions.getCompletedShipmentsFailure('There was an error while getting completed shipments'))
  }
}
