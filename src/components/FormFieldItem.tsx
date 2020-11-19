import React from 'react';
import {
  TextInput,
  Switch,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {FormField, FormFieldType} from '../model/formField';
import {editFormFieldValue} from '../redux/formSlice';
import CheckBox from '@react-native-community/checkbox';
import PlusIcon from './icons/PlusIcon';
import DashIcon from './icons/DashIcon';
import colors from '../theme/colors';
import commonStyles from '../theme/commonStyles';

type Props = {
  formField: FormField;
  index: number;
  editable?: boolean;
};

const FormFieldItem = ({formField, index, editable = true}: Props) => {
  const dispatch = useDispatch();

  switch (formField.type) {
    case FormFieldType.number: {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.formFieldTitle}>{formField.title}</Text>
          <View style={{height: 5}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.plusMinusButton}
              disabled={!editable}
              onPress={() =>
                dispatch(
                  editFormFieldValue({
                    value: formField.value - 1,
                    index,
                  }),
                )
              }>
              <DashIcon color="white" />
            </TouchableOpacity>
            <View style={{width: 15}} />
            <TextInput
              keyboardType="numeric"
              value={formField.value.toString()}
              onChangeText={(text) =>
                dispatch(
                  editFormFieldValue({
                    value: text !== '' ? parseInt(text, 10) : 0,
                    index,
                  }),
                )
              }
            />
            <View style={{width: 15}} />
            <TouchableOpacity
              style={styles.plusMinusButton}
              disabled={!editable}
              onPress={() =>
                dispatch(
                  editFormFieldValue({
                    value: formField.value + 1,
                    index,
                  }),
                )
              }>
              <PlusIcon color="white" />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    case FormFieldType.toggle: {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.formFieldTitle}>{formField.title}</Text>
          <Switch
            value={formField.value as boolean}
            disabled={!editable}
            onValueChange={(newValue) =>
              dispatch(
                editFormFieldValue({
                  value: newValue,
                  index,
                }),
              )
            }
          />
        </View>
      );
    }
    case FormFieldType.checkbox: {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <CheckBox
            boxType="square"
            tintColors={{true: colors.primary}}
            onTintColor={colors.primary}
            onCheckColor={colors.primary}
            disabled={!editable}
            value={formField.value}
            onValueChange={(newValue) =>
              dispatch(
                editFormFieldValue({
                  value: newValue,
                  index,
                }),
              )
            }
          />
          {Platform.OS === 'ios' ? <View style={{width: 15}} /> : null}
          <Text style={styles.formFieldTitle}>{formField.title}</Text>
        </View>
      );
    }
    case FormFieldType.text:
    default: {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.formFieldTitle}>{formField.title}</Text>
          <TextInput
            style={commonStyles.textInput}
            editable={editable}
            keyboardType="default"
            value={formField.value}
            placeholder="Enter some text"
            onChangeText={(text) =>
              dispatch(
                editFormFieldValue({
                  value: text,
                  index,
                }),
              )
            }
          />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  formFieldTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  plusMinusButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default FormFieldItem;
