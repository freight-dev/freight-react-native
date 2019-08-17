import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as ConfigReducer } from './Config/Reducers'
import { reducer as PortReducer } from './Port/Reducers'
import { reducer as CargoReducer } from './Cargo/Reducers'
import { reducer as ContractReducer } from './Contract/Reducers'
import { reducer as ShipmentReducer } from './Shipment/Reducers'
import { reducer as AuthReducer } from './Auth/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    config: ConfigReducer,
    port: PortReducer,
    cargo: CargoReducer,
    contract: ContractReducer,
    shipment: ShipmentReducer,
    auth: AuthReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
