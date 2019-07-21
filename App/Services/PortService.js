import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const portApiClient = axios.create({
  baseURL: Config.API_URL + '/port',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function getPort() {
  return portApiClient.get().then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

export const portService = {
  getPort,
}
