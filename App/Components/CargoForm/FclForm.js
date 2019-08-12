import React from 'react'
import { GiftedForm } from 'react-native-gifted-form'
import Styles from './FormStyle'
import { Text } from 'react-native'

export const FCL = (containerTypes) => {
  return (
    <GiftedForm>

      {/* Container Type */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Container Type</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.ModalWidget
          displayValue="containerType"
          widgetStyles={{
            rowContainer: Styles.fieldUnit,
            alignRight: Styles.fieldUnitTextContainer,
            modalTitle: Styles.spacer,
            modalValue: Styles.fieldUnitText,
          }}>
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
      </GiftedForm.GroupWidget>

      {/* Quantity */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Quantity</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.TextInputWidget
          name="quantity"
          clearButtonMode="while-editing"
          placeholder="Enter quantity.."
          keyboardType="numeric"
          widgetStyles={{
            rowContainer: Styles.field,
            row: Styles.fieldTextContainer,
            spacer: Styles.spacer,
            textInputInline: Styles.fieldText,
          }}
        />
      </GiftedForm.GroupWidget>

    </GiftedForm>
  )
}
