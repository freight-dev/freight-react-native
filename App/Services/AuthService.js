import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import { resolve } from 'react-native-svg/lib/resolve'

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
      console.log(value);
      return value
    }
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

function signUp(payload) {
  const requestBody = {
    email: payload.email ? payload.email : null,
    phone: payload.phone ? payload.phone : null,
    password: payload.password,
    companyName: payload.companyName ? payload.companyName: null,
    type: payload.type,
  }
  console.log(requestBody)
  return authApiClient.post(Config.API_URL + '/authentication', requestBody).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    console.log("response: " + JSON.stringify(response))
    return null
  })
}

function verify(payload) {
  const requestBody = {
    verificationCode: payload.verificationCode,
  }
  return authApiClientWithToken.post(Config.API_URL + '/verify', requestBody).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

export const authService = {
  storeToken,
  getToken,
  signUp,
  verify,
}
