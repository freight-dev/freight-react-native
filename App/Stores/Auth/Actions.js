import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Sign Up
  signUp: ['payload'],
  signUpLoading: null,
  signUpSuccess: [],
  signUpFailure: ['error'],
  // Verify
  verify: ['payload'],
  verifyLoading: null,
  verifySuccess: [],
  verifyFailure: ['error'],
})

export const AuthTypes = Types
export default Creators
