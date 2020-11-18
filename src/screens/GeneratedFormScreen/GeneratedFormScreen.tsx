import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../model/reactNavigationType';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const GeneratedFormScreen = (_props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Hello from GeneratedFormScreen</Text>
    </SafeAreaView>
  );
};

export default GeneratedFormScreen;
