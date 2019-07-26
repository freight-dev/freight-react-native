/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  contracts: [],
  contractsIsLoading: false,
  contractsErrorMessage: null,
  contractsStatusSearch: [
    'TRANSPORTER_OFFERED',
    'CUSTOMER_NEGOTIATE',
    'CUSTOMER_ACCEPTED',
    'CUSTOMER_DECLINED',
    'CUSTOMER_EXPIRED',
    'TRANSPORTER_EXPIRED'],
}
