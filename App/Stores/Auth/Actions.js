import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Signed In
  isSignedIn: null,
  isSignedInLoading: null,
  isSignedInSuccess: ['token'],
  isSignedInFailure: ['error'],

  // Sign In
  signIn: ['payload'],
  signInLoading: null,
  signInSuccess: ['token'],
  signInFailure: ['error'],

  // Sign Up
  signUp: ['payload'],
  signUpLoading: null,
  signUpSuccess: ['token'],
  signUpFailure: ['error'],

  // Verify
  verify: ['payload'],
  verifyLoading: null,
  verifySuccess: [],
  verifyFailure: ['error'],
})

export const AuthTypes = Types
export default Creators
