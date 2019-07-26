import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import moment from 'moment'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const cargoApiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJndWlkIjoiMDNiM2RhYjktM2JkZS00ZTNiLWExZTgtNDU3M2FhZDQ2NjViIiwidXNlcl90eXBlIjoiTk9UX0tOT1dOIiwiYXV0aGVudGljYXRpb25fc3RhdHVzIjoiVkVSSUZJRUQiLCJ0b2tlbiI6ImI4NjkzN2FiLTFhM2QtNGZmOC05YjcxLWM5OTRjYTUwYmQ3MyIsImlzcyI6ImZyZWlnaHQtYmFja2VuZCIsImlhdCI6MTU2MjU1MDQyNX0.ylDjhUQ31rp2YWmAWjIJwi2ipBeO2YZSXNIdxPDbYIc',
  },
  timeout: 3000,
})

function postCargo(payload) {
  const requestBody = {
    departure: moment(payload.departure, 'YYYY-MM-DD').unix(),
    cargoTypeId: payload.cargoTypeId,
    quantity: payload.quantity,
    weight: payload.weight === undefined ? null : payload.weight,
    weightUnit: payload.weightUnit === undefined ? 'NOT_USED' : payload.weightUnit.toString(),
    volume: payload.volume === undefined ? null : payload.volume,
    volumeUnit: payload.volumeUnit === undefined ? 'NOT_USED' : payload.volumeUnit.toString(),
    length: payload.length === undefined ? null : payload.length,
    width: payload.width === undefined ? null : payload.width,
    height: payload.height === undefined ? null : payload.height,
    dimensionUnit:
      payload.dimensionUnit === undefined ? 'NOT_USED' : payload.dimensionUnit.toString(),
    containerTypeId:
      payload.containerTypeId === undefined ? null : payload.containerTypeId.toString(),
    bulkTypeId: payload.bulkTypeId === undefined ? null : payload.bulkTypeId.toString(),
  }

  return cargoApiClient.post(Config.API_URL + '/cargo', requestBody).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

function getActiveCargos() {
  return cargoApiClient.get(Config.API_URL + '/cargo?status=inquiry').then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

function getHistoryCargos() {
  return cargoApiClient.get(Config.API_URL + '/cargo?status=reserved,expired,canceled').then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

export const cargoService = {
  postCargo,
  getActiveCargos,
  getHistoryCargos,
}
