import React from 'react'
import { GiftedFormManager } from 'react-native-gifted-form'

export const validators = {
  departure: {
    title: 'Departure date',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
    ],
  },
  quantity: {
    title: 'Quantity',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [1, 10],
        message: '{TITLE} is too huge',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  containerTypeId: {
    title: 'Container Type',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 0) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
    ],
  },
  weight: {
    title: 'Weight',
    validate: [
      {
        validator: (...args) => {
          if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [0, 10],
        message: '{TITLE} is too heavy. Consider changing the weight unit',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  weightUnit: {
    title: 'Weight Unit',
    validate: [
      {
        validator: (...args) => {
          if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
    ],
  },
  volume: {
    title: 'Weight',
    validate: [
      {
        validator: (...args) => {
          if ([1, 2].includes(GiftedFormManager.getValue('cargo', 'cargoTypeId'))) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [0, 10],
        message: '{TITLE} is too big. Consider changing the volume unit',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  volumeUnit: {
    title: 'Weight Unit',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 2) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
    ],
  },
  length: {
    title: 'Length',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [0, 10],
        message: '{TITLE} is too long. Consider changing the dimension unit',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  width: {
    title: 'Width',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [0, 10],
        message: '{TITLE} is too long. Consider changing the dimension unit',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  height: {
    title: 'Height',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
      {
        validator: 'isLength',
        arguments: [0, 10],
        message: '{TITLE} is too long. Consider changing the dimension unit',
      },
      {
        validator: 'matches',
        arguments: /^[0-9]*$/,
        message: '{TITLE} can contains only numeric characters',
      },
    ],
  },
  dimensionUnit: {
    title: 'Dimension Unit',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 1) {
            return args[0] !== undefined && args[0] !== ''
          }
          return true
        },
        message: '{TITLE} is required',
      },
    ],
  },
  bulkTypeId: {
    title: 'Bulk Type',
    validate: [
      {
        validator: (...args) => {
          if (GiftedFormManager.getValue('cargo', 'cargoTypeId') === 2) {
            return args[0] !== undefined
          }
          return true
        },
        message: '{TITLE} is required',
      },
    ],
  },
  originMainName: {
    title: 'Origin',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
    ],
  },
  destinationMainName: {
    title: 'Destination',
    validate: [
      {
        validator: (...args) => {
          return args[0] !== undefined && args[0] !== ''
        },
        message: '{TITLE} is required',
      },
    ],
  },
}
