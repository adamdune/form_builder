import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
      <Button
        onPress={() => props.navigation.navigate('GeneratedForm')}
        title="go to gen form"></Button>
    </View>
  );
};

export default HomeScreen;
