import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title={'Game details'}
        onPress={() => {
          navigation.navigate('GameDetails');
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
