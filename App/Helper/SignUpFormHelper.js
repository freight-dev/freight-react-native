import React from 'react'
import { GiftedFormManager } from 'react-native-gifted-form'

export const INDIVIDUAL = 'INDIVIDUAL'
export const COMPANY = 'COMPANY'
export const CUSTOMER = 'CUSTOMER'
export const TRANSPORTER = 'TRANSPORTER'

export const validators = {
  phone: {
    title: 'Phone',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [9, 15],
        message: '{TITLE} has to be between 9-15 digits',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  password: {
    title: 'Password',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [5, 25],
        message: '{TITLE} has to be between 5-25 characters',
      },
    ],
  },
  retypePassword: {
    title: 'Retype Password',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: 'Please reconfirm password',
      },
      {
        validator: (...args) => {
          const password = GiftedFormManager.getValue('signUp', 'password')
          if (password !== undefined && password !== '') {
            return password === args[0]
          }
          return false
        },
        message: 'Password doesn\'t match'
      },
    ],
  },
  type: {
    title: 'Type',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: 'You need to specify if you own a cargo or ship',
      },
    ],
  },
  companyName: {
    title: 'Company Name',
    validate: [
      {
        validator: (...args) => {
          const owner = GiftedFormManager.getValue('signUp', 'owner')
          if (owner === 'company') {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required'
      },
      {
        validator: 'isLength',
        arguments: [3, 150],
        message: '{TITLE} has to be between 3-150 characters',
      },
    ],
  },
}
