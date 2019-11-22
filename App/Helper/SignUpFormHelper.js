import React from 'react'
import { GiftedFormManager } from 'react-native-gifted-form'
import { COMPANY } from './AuthHelper'

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
          if (owner === COMPANY) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required'
      },
      {
        validator: (...args) => {
          const owner = GiftedFormManager.getValue('signUp', 'owner')
          if (owner === COMPANY) {
            return args[0].length >= 3 && args[0].length <= 150
          }
          return true
        },
        message: '{TITLE} has to be between 3-150 characters'
      },
    ],
  },
}
