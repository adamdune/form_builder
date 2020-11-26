import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import FormFieldContainer from '../components/FormFieldContainer';
import ArrowIcon from '../components/icons/ArrowIcon';
import {RootStackParamList} from '../model/reactNavigationType';
import {RootState} from '../redux';
import commonStyles from '../theme/commonStyles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'GeneratedForm'>;
};

const GeneratedFormScreen = ({navigation}: Props) => {
  const {title, formFields} = useSelector((state: RootState) => state.form);

  console.log('>>>', title, formFields);

  // allows default title to stay consistent as this prevents Math.random from being called every render
  const [formTitle] = useState(
    title || `Untitled Form ${Math.ceil(Math.random() * 3000)}`,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={commonStyles.screenContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            style={{paddingRight: 20}}
            onPress={() => navigation.goBack()}>
            <ArrowIcon width={30} height={30} />
          </TouchableOpacity>
          <Text style={commonStyles.header}>{formTitle}</Text>
        </View>
        {formFields.length ? (
          <FormFieldContainer variant="form" />
        ) : (
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            There's nothing to see here. Maybe you should try adding a form
            field.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneratedFormScreen;
