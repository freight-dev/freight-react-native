import { cancelled, take, fork, put, call, takeLatest, select } from 'redux-saga/effects'
import AuthActions, { AuthTypes } from 'App/Stores/Auth/Actions'
import { authService } from 'App/Services/AuthService'
import AsyncStorage from '@react-native-community/async-storage'
import NavigationService from '../Services/NavigationService'
import CargoActions from '../Stores/Cargo/Actions'
import { CUSTOMER, TRANSPORTER } from '../Helper/AuthHelper'

// export function* isSignedIn() {
//   yield put(AuthActions.isSignedInLoading())
//
//   const token = yield call(authService.getToken)
//   if (!!token) {
//     yield put(AuthActions.isSignedInSuccess(token))
//   } else {
//     yield put(AuthActions.isSignedInFailure('There was an error while trying to sign in'))
//   }
// }

export function* isSignedIn() {
  while (true) {
    const { payload } = yield take(AuthTypes.SIGN_IN)

    // fork return a Task object
    const task = yield fork(signIn, payload)
    const action = yield take([AuthTypes.SIGN_IN_FAILURE])
    // if (action.type === 'LOGOUT')
    //   yield cancel(task)
    yield call(authService.clearToken)
  }
}

export function* signIn(payload) {
  try {
    yield put(AuthActions.signInLoading())
    const auth = yield call(authService.signIn, payload)

    if (!auth.error && !!auth.token && !!auth.type) {
      // AsyncStorage.setItem('token', auth.token)
      yield put(AuthActions.signInSuccess(auth))
      if (auth.type === CUSTOMER) {
        NavigationService.navigateAndReset('CargoOwner')
      } else if (auth.type === TRANSPORTER) {
        NavigationService.navigateAndReset('ShipOwner')
      } else {
        console.error('auth.type is not recognized')
        NavigationService.navigateAndReset('SignIn')
      }
    } else if (auth.error) {
      yield put(AuthActions.signInFailure(auth.error.description))
    } else {
      yield put(AuthActions.signInFailure('There was an error while trying to sign in'))
    }

  } catch (error) {
    yield put(AuthActions.signInFailure('There was an error while trying to sign in, error=' + error))

  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to sign page
    if (yield cancelled()) {
      NavigationService.navigateAndReset('SignIn')
    }
  }
}

export function* signUp(action) {
  yield put(AuthActions.signUpLoading())

  const auth = yield call(authService.signUp, action.payload)
  if (!auth.error && !!auth.token && !!auth.type) {
    yield put(AuthActions.signUpSuccess(auth))
    if (auth.type === CUSTOMER) {
      NavigationService.navigateAndReset('CargoOwner')
    } else if (auth.type === TRANSPORTER) {
      NavigationService.navigateAndReset('ShipOwner')
    } else {
      console.error('auth.type is not recognized')
      NavigationService.navigateAndReset('SignIn')
    }
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
