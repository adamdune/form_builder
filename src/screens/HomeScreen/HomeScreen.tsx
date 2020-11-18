import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../model/reactNavigationType';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('GeneratedForm')}
        title="Go to Next Screen"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
