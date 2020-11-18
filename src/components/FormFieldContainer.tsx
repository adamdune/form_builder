import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import FormFieldItem from './FormFieldItem';
import CloseIcon from './icons/CloseIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {removeFormField} from '../redux/formSlice';
import colors from '../theme/colors';

type Props = {
  variant: 'preview' | 'form';
};

const FormFieldContainer = ({variant}: Props) => {
  const {formFields} = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  return (
    <View style={{paddingVertical: 20}}>
      {formFields.map((formField, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <FormFieldItem
              formField={formField}
              index={index}
              editable={variant === 'form'}
            />
            {variant === 'form' ? null : (
              <>
                <View style={{width: 15}} />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => dispatch(removeFormField({index}))}>
                  <CloseIcon color="white" />
                </TouchableOpacity>
              </>
            )}
          </View>
          {index !== formFields.length - 1 ? (
            <View style={{height: 15}} />
          ) : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: colors.danger,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default FormFieldContainer;
