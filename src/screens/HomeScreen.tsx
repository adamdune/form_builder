import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import {RootStackParamList} from '../model/reactNavigationType';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import {
  addNewFormField,
  resetForm,
  setTitle,
  fetchInitialState,
} from '../redux/formSlice';
import {createNewFormField, FormFieldType} from '../model/formField';
import FormFieldContainer from '../components/FormFieldContainer';
import commonStyles from '../theme/commonStyles';
import colors from '../theme/colors';
import {Picker} from '@react-native-picker/picker';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const {formFields, title, errorMessage} = useSelector(
    (state: RootState) => state.form,
  );
  const dispatch = useDispatch();
  const [newFormFieldTitle, setNewFormFieldTitle] = useState('');
  const [newFormFieldType, setNewFormFieldType] = useState(FormFieldType.text);

  useEffect(() => {
    dispatch(fetchInitialState(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressAdd = () => {
    if (!newFormFieldTitle) {
      return Alert.alert('The Form Field needs a name!');
    }

    dispatch(
      addNewFormField(createNewFormField(newFormFieldTitle, newFormFieldType)),
    );
    setNewFormFieldTitle('');
    setNewFormFieldType(FormFieldType.text);
  };

  const onPressContinue = () => {
    // need to be handled since its outside of ScrollView
    Keyboard.dismiss();
    navigation.navigate('GeneratedForm');
  };

  const onPressResetForm = () => {
    dispatch(resetForm());
    setNewFormFieldTitle('');
    setNewFormFieldType(FormFieldType.text);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={commonStyles.screenContainer}>
        <Text style={commonStyles.header}>Let's Build A Form</Text>
        {errorMessage ? (
          <Text style={commonStyles.errorCard}>{errorMessage}</Text>
        ) : null}
        <View style={{height: 20}} />
        <View style={commonStyles.card}>
          <Text>
            Form Name <Text style={commonStyles.subText}>(optional)</Text>
          </Text>
          <TextInput
            placeholder="Give your form a name"
            style={commonStyles.textInput}
            value={title}
            onChangeText={(text) => dispatch(setTitle(text))}
          />
          <View style={{height: 40}} />
          <Text>
            Field Name <Text style={commonStyles.subText}>(required)</Text>
          </Text>
          <TextInput
            placeholder="Give your form field a name"
            style={commonStyles.textInput}
            value={newFormFieldTitle}
            onChangeText={setNewFormFieldTitle}
          />
          <View style={{height: 20}} />
          <Text>Field Type</Text>
          <View style={{height: 10}} />
          {Platform.OS === 'ios' ? (
            <DropDownPicker
              items={[
                {label: 'Text', value: FormFieldType.text},
                {label: 'Number', value: FormFieldType.number},
                {label: 'Checkbox', value: FormFieldType.checkbox},
                {label: 'Toggle', value: FormFieldType.toggle},
              ]}
              defaultValue={FormFieldType.text}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) => {
                setNewFormFieldType(item.value);
              }}
            />
          ) : (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={newFormFieldType}
                onValueChange={(value) => {
                  setNewFormFieldType(value as FormFieldType);
                }}
                style={{
                  paddingVertical: 15,
                  width: '100%',
                }}
                mode="dropdown">
                <Picker.Item label="Text" value={FormFieldType.text} />
                <Picker.Item label="Number" value={FormFieldType.number} />
                <Picker.Item label="Checkbox" value={FormFieldType.checkbox} />
                <Picker.Item label="Toggle" value={FormFieldType.toggle} />
              </Picker>
            </View>
          )}
          <View style={{height: 20}} />
          <Button
            title="Add New Field"
            onPress={onPressAdd}
            color={colors.primary}
          />
          <View style={{height: 20}} />
          <Button
            title="Reset Form"
            onPress={onPressResetForm}
            color={colors.primary}
          />
        </View>
        <View style={{height: 20}} />
        {formFields.length !== 0 ? (
          <View style={commonStyles.card}>
            <Text style={styles.sectionHeader}>Form Preview</Text>
            <FormFieldContainer variant="preview" />
          </View>
        ) : null}
        <View style={{flex: 1}} />
      </ScrollView>
      <View style={{justifyContent: 'flex-end'}}>
        <Button
          color={colors.primary}
          title="Generate Form"
          onPress={onPressContinue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
  },
  pickerContainer: {
    borderColor: colors.gray200,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HomeScreen;
