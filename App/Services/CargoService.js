import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import moment from 'moment'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

function cargoApiClient(token) {
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

function postCargo(payload, token) {
  const requestBody = {
    departure: moment(payload.departure, 'YYYY-MM-DD').unix(),
    origin: payload.origin,
    destination: payload.destination,
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
      payload.containerTypeId === undefined ? null : payload.containerTypeId,
    bulkTypeId: payload.bulkTypeId === undefined ? null : payload.bulkTypeId,
  }
  console.log('token: ' + token)

  return cargoApiClient(token).post(Config.API_URL + '/cargo', requestBody).then((response) => {
    if (in200s(response.status)) {
      console.log('response: ' + JSON.stringify(response))

      return response.data
    }
    console.log('ERROR response: ' + JSON.stringify(response))

    return null
  })
}

function getActiveCargos(param, token) {
  console.log('inside getActive Cargo Service, token: ' + token)
  return cargoApiClient(token).get(Config.API_URL + '/cargo?status=inquiry&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }

      return null
    })
}

function getHistoryCargos(param, token) {
  return cargoApiClient(token).get(Config.API_URL + '/cargo?status=reserved,expired,canceled&start=' + param.start + '&limit=' + param.limit)
    .then((response) => {
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
