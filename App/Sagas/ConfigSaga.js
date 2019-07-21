import { put, call } from 'redux-saga/effects'
import ConfigActions from 'App/Stores/Config/Actions'
import { configService } from 'App/Services/ConfigService'

export function* getConfig() {
  yield put(ConfigActions.getConfigLoading())

  // Get config information from an API
  const config = yield call(configService.getConfig)
  if (!config.error) {
    yield put(ConfigActions.getConfigSuccess(config))
  } else if (config.error) {
    yield put(ConfigActions.getConfigFailure(config.error))
  } else {
    yield put(ConfigActions.getConfigFailure('There was an error while getting config information'))
  }
}
