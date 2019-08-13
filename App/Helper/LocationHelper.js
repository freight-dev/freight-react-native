export const secondaryLocation = (location) => {
  if (location.city !== null && location.city !== '') {
    return location.city
  }

  if (location.province !== null && location.province !== '') {
    return location.province
  }

  if (location.country !== null && location.country !== '') {
    return location.country
  }

  return null
}
