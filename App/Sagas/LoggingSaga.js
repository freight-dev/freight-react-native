import { select } from 'redux-saga/effects'

export function* getLog(action) {
  const state = yield select()
  console.log('action=', action)
  console.log('state=', state.auth)
}
