export const ifExist = (text) => {
  if (text === 'NOT_USED') {
    return null
  }

  if (text !== null && (text instanceof String || typeof text === 'string')) {
    return text.toLowerCase()
  } else if (text != null) {
    return text
  }

  return null
}

export const formatNumberToText = (number) => {
  if (number < 1000) {
    return number
  }
  if (number > 1000000000) {
    return number/1000000000 + ' miliar'
  } else if (number >= 1000000) {
    return number/1000000 + ' juta'
  } else if (number >= 1000) {
    return number/1000 + ' ribu'
  }

  return number
}

export const formatCurrency = (currency) => {
  if (currency === 'RP') {
    return 'Rp'
  }

  return currency
}

export const firstCharUpperCase = (text) => {
  if (text !== null && text !== '') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  }

  return null
}
