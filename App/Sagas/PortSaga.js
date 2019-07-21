import { put, call } from 'redux-saga/effects'
import PortActions from 'App/Stores/Port/Actions'
import { portService } from 'App/Services/PortService'

export function* getPort() {
  yield put(PortActions.getPortLoading())

  // Get port information from an API
  const port = yield call(portService.getPort)
  if (!port.error) {
    yield put(PortActions.getPortSuccess(port))
  } else if (port.error) {
    yield put(PortActions.getPortFailure(port.error))
  } else {
    yield put(PortActions.getPortFailure('There was an error while getting port information'))
  }
}
