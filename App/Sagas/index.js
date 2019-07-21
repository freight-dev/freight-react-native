import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { ConfigTypes } from '../Stores/Config/Actions'
import { PortTypes } from '../Stores/Port/Actions'
import { CargoTypes } from '../Stores/Cargo/Actions'
import { ContractTypes } from '../Stores/Contract/Actions'
import { fetchUser } from './ExampleSaga'
import { getConfig } from './ConfigSaga'
import { getPort } from './PortSaga'
import { postCargo, getActiveCargos } from './CargoSaga'
import { getContracts } from './ContractSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // Call `getConfig()` on application startup
    takeLatest(ConfigTypes.GET_CONFIG, getConfig),
    // Call `getPort()`
    takeLatest(PortTypes.GET_PORT, getPort),
    // Call `postCargo()`
    takeLatest(CargoTypes.POST_CARGO, postCargo),
    // Call `getActiveCargos()`
    takeLatest(CargoTypes.GET_ACTIVE_CARGOS, getActiveCargos),
    // Call `getActiveCargos()`
    takeLatest(ContractTypes.GET_CONTRACTS, getContracts),
  ])
}
