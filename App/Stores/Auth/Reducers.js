import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

/**
 * Signed In
 */
export const isSignedInLoading = (state) => ({
  ...state,
  isSignedInIsLoading: true,
})

export const isSignedInSuccess = (state, { token }) => ({
  ...state,
  token: token,
  isSignedInIsLoading: false,
})

export const isSignedInFailure = (state, { error }) => ({
  ...state,
  token: null,
  isSignedInIsLoading: false,
  isSignedInErrorMessage: error,
})

/**
 * Sign In
 */
export const signInLoading = (state) => ({
  ...state,
  signInIsLoading: true,
  signInErrorMessage: null,
})

export const signInSuccess = (state, { token }) => ({
  ...state,
  token: token,
  signInIsLoading: false,
  signInErrorMessage: null,
})

export const signInFailure = (state, { error }) => ({
  ...state,
  token: null,
  signInIsLoading: false,
  signInErrorMessage: error,
})

/**
 * Sign Up
 */
export const signUpLoading = (state) => ({
  ...state,
  signUpIsLoading: true,
  signUpErrorMessage: null,
})

export const signUpSuccess = (state, { token }) => ({
  ...state,
  token: 'sign up success',
  signUpIsLoading: false,
  signUpErrorMessage: null,
})

export const signUpFailure = (state, { error }) => ({
  ...state,
  token: 'sign up failure',

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
  [AuthTypes.IS_SIGNED_IN_FAILURE]: isSignedInFailure,
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
