import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { ConfigTypes } from '../Stores/Config/Actions'
import { PortTypes } from '../Stores/Port/Actions'
import { CargoTypes } from '../Stores/Cargo/Actions'
import { ContractTypes } from '../Stores/Contract/Actions'
import { ShipmentTypes } from '../Stores/Shipment/Actions'
import { AuthTypes } from '../Stores/Auth/Actions'
import { fetchUser } from './ExampleSaga'
import { getConfig } from './ConfigSaga'
import { getPort } from './PortSaga'
import { isSignedIn, signIn, signUp, verify } from './AuthSaga'
import { postCargo, getActiveCargos, getHistoryCargos } from './CargoSaga'
import { getContracts, setContractsStatusSearch, updateContractStatus } from './ContractSaga'
import { startup } from './StartupSaga'
import { getUpcomingShipments, getInProgressShipments, getCompletedShipments } from './ShipmentSaga'

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
    // Call `getHistoryCargos()`
    takeLatest(CargoTypes.GET_HISTORY_CARGOS, getHistoryCargos),
    // Call `updateContractStatus()`
    takeLatest(ContractTypes.UPDATE_CONTRACT_STATUS, updateContractStatus),
    // Call `getContracts()`
    takeLatest(ContractTypes.GET_CONTRACTS, getContracts),
    // Call `setContractStatusSearch()`
    takeLatest(ContractTypes.SET_CONTRACTS_STATUS_SEARCH, setContractsStatusSearch),
    // Call `getUpcomingShipments()`
    takeLatest(ShipmentTypes.GET_UPCOMING_SHIPMENTS, getUpcomingShipments),
    // Call `getInProgressShipments()`
    takeLatest(ShipmentTypes.GET_IN_PROGRESS_SHIPMENTS, getInProgressShipments),
    // Call `getCompletedShipments()`
    takeLatest(ShipmentTypes.GET_COMPLETED_SHIPMENTS, getCompletedShipments),
    // Call `isSignedIn()`
    takeLatest(AuthTypes.IS_SIGNED_IN, isSignedIn),
    // Call `signIn()`
    takeLatest(AuthTypes.SIGN_IN, signIn),
    // Call `signUp()`
    takeLatest(AuthTypes.SIGN_UP, signUp),
    // Call `verify()`
    takeLatest(AuthTypes.VERIFY, verify),
  ])
}
