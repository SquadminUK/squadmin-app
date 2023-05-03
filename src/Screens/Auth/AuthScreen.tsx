import React from 'react';
import {Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import Screen from '../../Components/Screen/Screen';

const LoginButton = ({navigation}) => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    // try {
    //   await authorize().then(
    //     () => {
    //       console.log('go to dashboard');
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //   );
    // } catch (e) {
    //   console.log(e);
    // }
    navigation.navigate('HomeContainer');
  };

  return <Button onPress={onPress} title="Log in" />;
};

const AuthScreen = ({navigation}) => {
  return (
    <Screen>
      <LoginButton navigation={navigation} />
    </Screen>
  );
};

export default AuthScreen;
