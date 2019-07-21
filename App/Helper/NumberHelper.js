export const formatNumber = (number) => {
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
