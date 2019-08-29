import { AsyncStorage } from 'react-native'
import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { authService } from 'App/Services/AuthService'

export function* signIn(action) {
  yield put(AuthActions.signInLoading())

  const auth = yield call(authService.signIn, action.payload)

  if (!auth.error) {
    yield call(authService.storeToken, auth.token);
    yield put(AuthActions.signInSuccess())
  } else if (auth.error) {
    console.log(auth.error)
    yield put(AuthActions.signInFailure(auth.error))
  } else {
    yield put(AuthActions.signInFailure('There was an error while trying to sign in'))
  }
}

export function* signUp(action) {
  yield put(AuthActions.signUpLoading())

  const auth = yield call(authService.signUp, action.payload)
  if (!auth.error) {
    yield call(authService.storeToken, auth.token);
    yield put(AuthActions.signUpSuccess())
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
    yield call(AsyncStorage.setItem, "token", auth.token);
  } else if (auth.error) {
    yield put(AuthActions.verifyFailure(auth.error))
  } else {
    yield put(AuthActions.verifyFailure('There was an error when trying to verify'))
  }
}
