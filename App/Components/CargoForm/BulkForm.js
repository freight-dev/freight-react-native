import React from 'react'
import { GiftedForm } from 'react-native-gifted-form'
import Styles from './FormStyle'
import { Text } from 'react-native'

export const Bulk = (weightUnits, volumeUnits, bulkTypes) => {
  return (
    <GiftedForm>

      {/*Quantity*/}
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

      {/* Commodity Type */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Commodity Type</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.ModalWidget
          displayValue="bulkType"
          widgetStyles={{
            rowContainer: Styles.fieldUnit,
            alignRight: Styles.fieldUnitTextContainer,
            modalTitle: Styles.spacer,
            modalValue: Styles.fieldUnitText,
          }}>
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

      {/* Package Volume */}
      <GiftedForm.GroupWidget style={Styles.fieldGroupContainer}>
        <GiftedForm.GroupWidget style={Styles.fieldTitleContainer}>
          <Text style={Styles.fieldTitleText}>Package Volume</Text>
        </GiftedForm.GroupWidget>
        <GiftedForm.GroupWidget style={Styles.fieldDataGroupContainer}>
          <GiftedForm.TextInputWidget
            name="volume"
            placeholder="Volume"
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
            displayValue="volumeUnit"
            widgetStyles={{
              rowContainer: Styles.fieldUnit,
              alignRight: Styles.fieldUnitTextContainer,
              modalTitle: Styles.spacer,
              modRalValue: Styles.fieldUnitText,
            }}>
            <GiftedForm.SelectWidget name="volumeUnit" multiple={false}>
              {volumeUnits
                .filter((volumeUnit) => volumeUnit !== 'NOT_USED')
                .map((volumeUnit) => (
                  <GiftedForm.OptionWidget key={volumeUnit} title={volumeUnit} value={volumeUnit} />
                ))}
            </GiftedForm.SelectWidget>
          </GiftedForm.ModalWidget>
        </GiftedForm.GroupWidget>
      </GiftedForm.GroupWidget>

    </GiftedForm>
  )
}
