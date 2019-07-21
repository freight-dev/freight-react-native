import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const contractApiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJndWlkIjoiMDNiM2RhYjktM2JkZS00ZTNiLWExZTgtNDU3M2FhZDQ2NjViIiwidXNlcl90eXBlIjoiTk9UX0tOT1dOIiwiYXV0aGVudGljYXRpb25fc3RhdHVzIjoiVkVSSUZJRUQiLCJ0b2tlbiI6ImI4NjkzN2FiLTFhM2QtNGZmOC05YjcxLWM5OTRjYTUwYmQ3MyIsImlzcyI6ImZyZWlnaHQtYmFja2VuZCIsImlhdCI6MTU2MjU1MDQyNX0.ylDjhUQ31rp2YWmAWjIJwi2ipBeO2YZSXNIdxPDbYIc',
  },
  timeout: 3000,
})

function getContracts(param) {
  return contractApiClient
    .get(Config.API_URL + '/contract?cargoId=' + param.cargoId)
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }
      return null
    })
}

export const contractService = {
  getContracts,
}
