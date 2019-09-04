import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Signed In
  isSignedIn: null,
  isSignedInLoading: null,
  isSignedInSuccess: ['signedIn'],
  // Sign In
  signIn: ['payload'],
  signInLoading: null,
  signInSuccess: ['signedIn'],
  signInFailure: ['error'],
  // Sign Up
  signUp: ['payload'],
  signUpLoading: null,
  signUpSuccess: ['signedIn'],
  signUpFailure: ['error'],
  // Verify
  verify: ['payload'],
  verifyLoading: null,
  verifySuccess: [],
  verifyFailure: ['error'],
})

export const AuthTypes = Types
export default Creators
