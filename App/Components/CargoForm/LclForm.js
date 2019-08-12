import React from 'react'
import { Text } from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Styles from './FormStyle'

export const LCL = (weightUnits, dimensionUnits) => {
  return (
    <GiftedForm>

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

      {/* Package Weight */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Package Weight</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.GroupWidget style={Styles.fieldDataGroupContainer}>
          <GiftedForm.TextInputWidget
              name="weight"
              // title="Weight"
              placeholder="Weight"
              clearButtonMode="while-editing"
              keyboardType="numeric"
              widgetStyles={{
                rowContainer: Styles.field,
                row: Styles.fieldTextContainer,
                spacer: Styles.spacer,
                textInputInline: Styles.fieldText,
              }}
            />
          <GiftedForm.ModalWidget
            displayValue="weightUnit"
            widgetStyles={{
              rowContainer: Styles.fieldUnit,
              alignRight: Styles.fieldUnitTextContainer,
              modalTitle: Styles.spacer,
              modRalValue: Styles.fieldUnitText,
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
      </GiftedForm.GroupWidget>

      {/* Package Dimension */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Package Dimension</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.GroupWidget style={Styles.fieldDataGroupContainer}>
          <GiftedForm.TextInputWidget
            name="length"
            // title="L"
            placeholder="Length"
            clearButtonMode="while-editing"
            keyboardType="numeric"
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
          />
          <GiftedForm.TextInputWidget
            name="width"
            // title="W"
            placeholder="Width"
            clearButtonMode="while-editing"
            keyboardType="numeric"
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
          />
          <GiftedForm.TextInputWidget
            name="height"
            // title="H"
            placeholder="Height"
            clearButtonMode="while-editing"
            keyboardType="numeric"
            widgetStyles={{
              rowContainer: Styles.field,
              row: Styles.fieldTextContainer,
              spacer: Styles.spacer,
              textInputInline: Styles.fieldText,
            }}
          />
          <GiftedForm.ModalWidget
            displayValue="dimensionUnit"
            placeholder="Unit"
            widgetStyles={{
              rowContainer: Styles.fieldUnit,
              alignRight: Styles.fieldUnitTextContainer,
              modalTitle: Styles.spacer,
              modalValue: Styles.fieldUnitText,
            }}>
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
        </GiftedForm.GroupWidget>
      </GiftedForm.GroupWidget>
    </GiftedForm>
  )
}
