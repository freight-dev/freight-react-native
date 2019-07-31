import React from 'react'
import { GiftedForm } from 'react-native-gifted-form'

export const Bulk = (weightUnits, volumeUnits, bulkTypes) => {
  return (
    <GiftedForm>
      <GiftedForm.TextInputWidget
        name="quantity"
        title="Quantity"
        placeholder="Enter quantity.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.TextInputWidget
        name="weight"
        title="Weight"
        placeholder="Enter weight.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.ModalWidget title="Weight Unit" displayValue="weightUnit">
        <GiftedForm.SelectWidget name="weightUnit" multiple={false}>
          {weightUnits
            .filter((weightUnit) => weightUnit !== 'NOT_USED')
            .map((weightUnit) => (
              <GiftedForm.OptionWidget key={weightUnit} title={weightUnit} value={weightUnit} />
            ))}
        </GiftedForm.SelectWidget>
      </GiftedForm.ModalWidget>
      <GiftedForm.TextInputWidget
        name="volume"
        title="Volume"
        placeholder="Enter volume.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.ModalWidget title="Volume Unit" displayValue="volumeUnit">
        <GiftedForm.SelectWidget name="volumeUnit" multiple={false}>
          {volumeUnits
            .filter((volumeUnit) => volumeUnit !== 'NOT_USED')
            .map((volumeUnit) => (
              <GiftedForm.OptionWidget key={volumeUnit} title={volumeUnit} value={volumeUnit} />
            ))}
        </GiftedForm.SelectWidget>
      </GiftedForm.ModalWidget>
      <GiftedForm.ModalWidget title="Bulk Type" displayValue="bulkType">
        <GiftedForm.SelectWidget name="bulkTypeId" multiple={false}>
          {bulkTypes.map((bulkType) => (
            <GiftedForm.OptionWidget
              key={bulkType.id}
              title={bulkType.displayName}
              value={bulkType.id}
            />
          ))}
        </GiftedForm.SelectWidget>
      </GiftedForm.ModalWidget>
    </GiftedForm>
  )
}
