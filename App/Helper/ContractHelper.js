import React from 'react'
import { OpenSansText } from '../Components/StyledText'
import { Badge } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Colors from '../Theme/Colors'

export const TRANSPORTER_OFFERED = 'TRANSPORTER_OFFERED'
export const CUSTOMER_NEGOTIATE = 'CUSTOMER_NEGOTIATE'
export const CUSTOMER_ACCEPTED = 'CUSTOMER_ACCEPTED'
export const CUSTOMER_DECLINED = 'CUSTOMER_DECLINED'
export const CUSTOMER_EXPIRED = 'CUSTOMER_EXPIRED'
export const TRANSPORTER_EXPIRED = 'TRANSPORTER_EXPIRED'
export const CUSTOMER_ACCEPT_OTHER_CONTRACT = 'CUSTOMER_ACCEPT_OTHER_CONTRACT'

export const ALL = 'All'
export const ACTION_REQUIRED = 'Action Required'
export const WAITING_REPLY = 'Waiting Reply'
export const DECLINED = 'Declined'
export const EXPIRED = 'Expired'

export const contractStatus = [
  TRANSPORTER_OFFERED,
  CUSTOMER_NEGOTIATE,
  CUSTOMER_DECLINED,
  CUSTOMER_EXPIRED,
  TRANSPORTER_EXPIRED,
  CUSTOMER_ACCEPT_OTHER_CONTRACT,
]

export const mapContractStatus = (status) => {
  switch (status) {
    case TRANSPORTER_OFFERED:
      return ACTION_REQUIRED
    case CUSTOMER_NEGOTIATE:
      return WAITING_REPLY
    case CUSTOMER_DECLINED:
      return DECLINED
    case CUSTOMER_ACCEPT_OTHER_CONTRACT:
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

const Style = StyleSheet.create({
  badgeStatusContainer: {
    padding: 10,
  },
  badgeStatusText: {
    color: 'white',
  },
  badgeContainer: {
    padding: 10,
    backgroundColor: 'grey',
  },
  badgeText: {
    color: 'white',
  },
})

export const contractStatusBadge = (contractStatus) => {
  let status = mapContractStatus(contractStatus)
  let badgeColor = null
  switch (status) {
    case ACTION_REQUIRED:
      badgeColor = Colors.success
      break
    case DECLINED:
    case EXPIRED:
      badgeColor = Colors.error
      break
    case WAITING_REPLY:
      badgeColor = Colors.grey
    default:
      break
  }
  if (badgeColor) {
    return <Badge
      // status={badgeStatus}
      badgeStyle={[Style.badgeStatusContainer, {backgroundColor: badgeColor}]}
      value={
        <OpenSansText style={Style.badgeStatusText}>{status}</OpenSansText>
      }
    />
  }

  return <Badge
    badgeStyle={Style.badgeContainer}
    value={
      <OpenSansText style={Style.badgeText}>{status}</OpenSansText>
    }
  />

}
