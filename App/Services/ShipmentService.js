import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import { authService } from './AuthService'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

function shipmentApiClient(token) {
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

function getUpcomingShipments(param, token) {
  return shipmentApiClient(token)
    .get(Config.API_URL + '/shipment?status=upcoming&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }
      return null
    })
}

function getInProgressShipments(param, token) {
  return shipmentApiClient(token)
    .get(Config.API_URL + '/shipment?status=live&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }
      return null
    })
}

function getCompletedShipments(param, token) {
  return shipmentApiClient(token)
    .get(Config.API_URL + '/shipment?status=completed&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }
      return null
    })
}

export const shipmentService = {
  getUpcomingShipments,
  getInProgressShipments,
  getCompletedShipments,
}
