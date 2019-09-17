import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const authApiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

async function storeToken(token) {
  AsyncStorage.setItem('token', token)
}

async function getToken() {
  try {
    await AsyncStorage.getItem('token').then(value => {
      if(value) {
        console.log('getToken: ' + value)
        return value
      }
      console.log('getToken NOT VALUE: ' + value + ' !!value: ' + !!value)
      return value
    })
  } catch(error) {
    console.error("Error in getting user's token, error=" + error)
  }
}

async function clearToken() {
  try {
    await AsyncStorage.removeItem('token')
  } catch(error) {
    console.error("Error in deleting user's token, error=" + error)
  }
}

const authApiClientWithToken = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' + getToken(),
  },
  timeout: 3000,
})

function signIn(payload) {
  const requestBody = {
    phone: payload.phone,
    password: payload.password,
  }
  return authApiClient.post(Config.API_URL + '/authentication/authenticate', requestBody).then((response) => {
    console.log('response before storing token=' + JSON.stringify(response.data))
    if (in200s(response.status)) {
      console.log('response:' + JSON.stringify(response.data))
      return response.data
    }

    return null
  })
}

function signUp(payload) {
  const requestBody = {
    phone: payload.phone,
    password: payload.password,
    companyName: payload.companyName,
    type: payload.type,
  }
  return authApiClient.post(Config.API_URL + '/authentication', requestBody).then((response) => {
    if (in200s(response.status)) {
      return storeToken(response.data.token).then(() => {
        return response.data
      })
    }
    return null
  })
}

function verify(payload) {
  const requestBody = {
    verificationCode: payload.verificationCode,
  }
  return authApiClientWithToken.post(Config.API_URL + '/verify', requestBody).then((response) => {
    if (in200s(response.status)) {
      return storeToken(response.data.token).then(() => {
        return response.data
      })
    }

    return null
  })
}

export const authService = {
  storeToken,
  getToken,
  clearToken,
  signIn,
  signUp,
  verify,
}
