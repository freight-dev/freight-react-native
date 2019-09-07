import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

/**
 * Signed In
 */
export const isSignedInLoading = (state) => ({
  ...state,
  isSignedInLoading: true,
})

export const isSignedInSuccess = (state) => ({
  ...state,
  signedIn: true,
  isSignedInLoading: false,
})

/**
 * Sign In
 */
export const signInLoading = (state) => ({
  ...state,
  signInIsLoading: true,
  signInErrorMessage: null,
})

export const signInSuccess = (state) => ({
  ...state,
  signedIn: true,
  signInIsLoading: false,
  signInErrorMessage: null,
})

export const signInFailure = (state, { error }) => ({
  ...state,
  signInIsLoading: false,
  signInErrorMessage: error.error.description,
})

/**
 * Sign Up
 */
export const signUpLoading = (state) => ({
  ...state,
  signUpIsLoading: true,
  signUpErrorMessage: null,
})

export const signUpSuccess = (state, { signedIn }) => ({
  ...state,
  signedIn: signedIn,
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
  [AuthTypes.IS_SIGNED_IN_LOADING]: isSignedInLoading,
  [AuthTypes.IS_SIGNED_IN_SUCCESS]: isSignedInSuccess,
  [AuthTypes.SIGN_UP_LOADING]: signUpLoading,
  [AuthTypes.SIGN_UP_SUCCESS]: signUpSuccess,
  [AuthTypes.SIGN_UP_FAILURE]: signUpFailure,
  [AuthTypes.SIGN_IN_LOADING]: signInLoading,
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [AuthTypes.SIGN_IN_FAILURE]: signInFailure,
  [AuthTypes.VERIFY_LOADING]: verifyLoading,
  [AuthTypes.VERIFY_SUCCESS]: verifySuccess,
  [AuthTypes.VERIFY_FAILURE]: verifyFailure,
})
