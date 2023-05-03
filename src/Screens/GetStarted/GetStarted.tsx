import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Squadmin</Text>
        <Text>Organising games effortlessly</Text>
      </View>
      <View>
        <Button
          title={'Get started'}
          onPress={() => {
            navigation.navigate('Auth');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
