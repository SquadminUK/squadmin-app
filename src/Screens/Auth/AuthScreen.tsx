import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';

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
    <SafeAreaView>
      <LoginButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default AuthScreen;
