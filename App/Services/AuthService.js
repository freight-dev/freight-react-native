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

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.error("Error in storing user's token, error=" + error)
  }
}

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if(value !== null) {
      console.log('getting token, with value: ' + value)
      return value
    }
    console.log('getting token NULL , with value: ' + value)

  } catch(error) {
    console.error("Error in getting user's token, error=" + error)
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
    if (in200s(response.status)) {
      return storeToken(response.data.token).then(() => {
        console.log("token: " + JSON.stringify(response.data))
        return response.data
      })
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
  signIn,
  signUp,
  verify,
}
