export const printNumber = (value, unit=null) => {
  if (!value || value === '') {
    return null
  }

  if (!unit || unit === 'NOT_USED' || unit === '') {
    return value
  } else {
    return value + ' ' + unit.toLowerCase()
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

export const firstCharUpperCaseAndRemoveUnderscore = (text) => {
  if (text !== null && text !== '') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().replace(/_/g, " ");
  }

  return null
}
