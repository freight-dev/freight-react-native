import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { authService } from 'App/Services/AuthService'
import NavigationService from '../Services/NavigationService'

export function* isSignedIn() {
  yield put(AuthActions.isSignedInLoading())

  const token = yield call(authService.getToken)
  if (!token) {
    yield put(AuthActions.isSignedInSuccess())
  }
}

export function* signIn(action) {
  yield put(AuthActions.signInLoading())

  const auth = yield call(authService.signIn, action.payload)

  if (!auth.error && !auth.token) {
    yield put(AuthActions.signInSuccess())
  } else if (auth.error) {
    yield put(AuthActions.signInFailure(auth.error))
  } else {
    yield put(AuthActions.signInFailure('There was an error while trying to sign in'))
  }
}

export function* signUp(action) {
  yield put(AuthActions.signUpLoading())

  const auth = yield call(authService.signUp, action.payload)
  const signedIn = !!auth.token

  if (!auth.error) {
    yield put(AuthActions.signUpSuccess(signedIn))
  } else if (auth.error) {
    yield put(AuthActions.signUpFailure(auth.error))
  } else {
    yield put(AuthActions.signUpFailure('There was an error while trying to sign up'))
  }
}

export function* verify(action) {
  yield put(AuthActions.verifyLoading())

  const auth = yield call(authService.verify, action.payload)
  if (!auth.error) {
    yield put(AuthActions.verifySuccess())
  } else if (auth.error) {
    yield put(AuthActions.verifyFailure(auth.error))
  } else {
    yield put(AuthActions.verifyFailure('There was an error when trying to verify'))
  }
}
