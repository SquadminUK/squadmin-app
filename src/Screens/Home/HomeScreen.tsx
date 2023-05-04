import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';
import {AuthContext} from '../../Contexts/AuthContext';

const HomeScreen = ({navigation}) => {
  const user = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>{user.firstName + ` ` + user.lastName}</Text>
      <Text>{`Email:` + user.emailAddress}</Text>
      <Button
        title={'Game details'}
        onPress={() => {
          user.emailAddress = 'newemail@gmail.com';
          // navigation.navigate('GameDetails');
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
