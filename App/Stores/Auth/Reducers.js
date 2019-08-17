import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

/**
 * Sign Up
 */
export const signUpLoading = (state) => ({
  ...state,
  signUpIsLoading: true,
  signUpErrorMessage: null,
})

export const signUpSuccess = (state) => ({
  ...state,
  signUpIsLoading: false,
  signUpErrorMessage: null,
})

export const signUpFailure = (state, { error }) => ({
  ...state,
  signUpIsLoading: false,
  signUpErrorMessage: error.error.description,
})

/**
 * Verify
 */
export const verifyLoading = (state) => ({
  ...state,
  verifyIsLoading: true,
  verifyErrorMessage: null,
})

export const verifySuccess = (state) => ({
  ...state,
  verifyIsLoading: false,
  verifyErrorMessage: null,
})

export const verifyFailure = (state, { error }) => ({
  ...state,
  verifyIsLoading: false,
  verifyErrorMessage: error.error.description,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.SIGN_UP_LOADING]: signUpLoading,
  [AuthTypes.SIGN_UP_SUCCESS]: signUpSuccess,
  [AuthTypes.SIGN_UP_FAILURE]: signUpFailure,
  [AuthTypes.VERIFY_LOADING]: verifyLoading,
  [AuthTypes.VERIFY_SUCCESS]: verifySuccess,
  [AuthTypes.VERIFY_FAILURE]: verifyFailure,
})
