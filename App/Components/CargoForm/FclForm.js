import React from 'react'
import { GiftedForm } from 'react-native-gifted-form'

export const FCL = (containerTypes) => {
  return (
    <GiftedForm>
      <GiftedForm.ModalWidget title="Container Type" displayValue="containerType">
        <GiftedForm.SelectWidget name="containerTypeId" multiple={false}>
          {containerTypes.map((containerType) => (
            <GiftedForm.OptionWidget
              key={containerType.id}
              title={containerType.displayName}
              value={containerType.id}
            />
          ))}
        </GiftedForm.SelectWidget>
      </GiftedForm.ModalWidget>
      <GiftedForm.TextInputWidget
        name="quantity"
        title="Quantity"
        placeholder="Enter quantity.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
    </GiftedForm>
  )
}
