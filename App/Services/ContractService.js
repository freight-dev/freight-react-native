import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import { authService } from './AuthService'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

function contractApiClient(token) {
  return axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + token
    },
    timeout: 3000,
  })
}

function updateContractStatus(payload, token) {
  const requestBody = {
    contractId: payload.contractId,
    status: payload.status,
  }
  console.log(requestBody)
  return contractApiClient(token).post(Config.API_URL + '/contract', requestBody).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

function getContracts(param, token) {
  return contractApiClient(token)
    .get(Config.API_URL + '/contract?cargoId=' + param.cargoId + '&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }
      return null
    })
}

export const contractService = {
  updateContractStatus,
  getContracts,
}
