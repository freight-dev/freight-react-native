import React from 'react'
import { View } from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Styles from './LclFormStyle'
import { OpenSansText } from '../StyledText'

export const LCL = (weightUnits, dimensionUnits) => {
  return (
    <GiftedForm>
      <GiftedForm.TextInputWidget
        name="quantity"
        title="Quantity"
        placeholder="Enter quantity.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.GroupWidget style={Styles.weightContainer}>
        <GiftedForm.TextInputWidget
            name="weight"
            // title="Weight"
            placeholder="Weight"
            clearButtonMode="while-editing"
            keyboardType="numeric"
            widgetStyles={{
              rowContainer: Styles.weight,
              row: Styles.weightTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.weightText,
            }}
          />
        <GiftedForm.ModalWidget
          displayValue="weightUnit"
          widgetStyles={{
            rowContainer: Styles.weightUnit,
          }}
        >
          <GiftedForm.SelectWidget name="weightUnit" multiple={false}>
            {weightUnits
              .filter((weightUnit) => weightUnit !== 'NOT_USED')
              .map((weightUnit) => (
                <GiftedForm.OptionWidget key={weightUnit} title={weightUnit} value={weightUnit} />
              ))}
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>
      </GiftedForm.GroupWidget>

      <GiftedForm.TextInputWidget
        name="length"
        title="Length"
        placeholder="Enter length.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.TextInputWidget
        name="width"
        title="Width"
        placeholder="Enter width.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.TextInputWidget
        name="height"
        title="Height"
        placeholder="Enter height.."
        clearButtonMode="while-editing"
        keyboardType="numeric"
      />
      <GiftedForm.ModalWidget title="Dimension Unit" displayValue="dimensionUnit">
        <GiftedForm.SelectWidget name="dimensionUnit" multiple={false}>
          {dimensionUnits
            .filter((dimensionUnit) => dimensionUnit !== 'NOT_USED')
            .map((dimensionUnit) => (
              <GiftedForm.OptionWidget
                key={dimensionUnit}
                title={dimensionUnit}
                value={dimensionUnit}
              />
            ))}
        </GiftedForm.SelectWidget>
      </GiftedForm.ModalWidget>
    </GiftedForm>
  )
}
