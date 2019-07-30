import React from 'react'
import { OpenSansText } from '../Components/StyledText'
import { Badge } from 'react-native-elements'
import { StyleSheet } from 'react-native'

export const TRANSPORTER_OFFERED = 'TRANSPORTER_OFFERED'
export const CUSTOMER_NEGOTIATE = 'CUSTOMER_NEGOTIATE'
export const CUSTOMER_ACCEPTED = 'CUSTOMER_ACCEPTED'
export const CUSTOMER_DECLINED = 'CUSTOMER_DECLINED'
export const CUSTOMER_EXPIRED = 'CUSTOMER_EXPIRED'
export const TRANSPORTER_EXPIRED = 'TRANSPORTER_EXPIRED'

export const ALL = 'All'
export const ACTION_REQUIRED = 'Action Required'
export const WAITING_REPLY = 'Waiting Reply'
export const ACCEPTED = 'Accepted'
export const DECLINED = 'Declined'
export const EXPIRED = 'Expired'

export const contractStatus = [
  TRANSPORTER_OFFERED,
  CUSTOMER_NEGOTIATE,
  CUSTOMER_ACCEPTED,
  CUSTOMER_DECLINED,
  CUSTOMER_EXPIRED,
  TRANSPORTER_EXPIRED
]

export const mapContractStatus = (status) => {
  switch (status) {
    case TRANSPORTER_OFFERED:
      return ACTION_REQUIRED
    case CUSTOMER_NEGOTIATE:
      return WAITING_REPLY
    case CUSTOMER_ACCEPTED:
      return ACCEPTED
    case CUSTOMER_DECLINED:
      return DECLINED
    case CUSTOMER_EXPIRED:
      return EXPIRED
    case TRANSPORTER_EXPIRED:
      return EXPIRED
    case contractStatus:
      return ALL
    default:
      return null
  }
}

export const mapToContractStatus = (status) => {
  switch (status) {
    case ACTION_REQUIRED:
      return [TRANSPORTER_OFFERED]
    case WAITING_REPLY:
      return [CUSTOMER_NEGOTIATE]
    case ACCEPTED:
      return [CUSTOMER_ACCEPTED]
    case DECLINED:
      return [CUSTOMER_DECLINED]
    case EXPIRED:
      return [CUSTOMER_EXPIRED, TRANSPORTER_EXPIRED]
    case ALL:
      return contractStatus
    default:
      return null
  }
}

const Style = StyleSheet.create({
  badgeText: {
    color: 'white',
    padding: 5,
  },
  text: {
    color: 'black',
    padding: 5,
  },
})

export const contractStatusBadge = (contractStatus) => {
  let status = mapContractStatus(contractStatus)
  let badge = false
  let badgeStatus = ''
  switch (status) {
    case ACTION_REQUIRED:
      badge = true
      badgeStatus = 'success'
      break
    case WAITING_REPLY:
    case ACCEPTED:
    case DECLINED:
    case EXPIRED:
    default:
      break
  }
  if (badge === true) {
    return <Badge
      status={badgeStatus}
      value={
        <OpenSansText style={Style.badgeText}>{status}</OpenSansText>
      }
    />
  }

  return <OpenSansText style={Style.text}>{status}</OpenSansText>

}
