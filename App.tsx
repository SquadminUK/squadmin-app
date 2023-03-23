/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';

import {useAuth0, Auth0Provider} from 'react-native-auth0';

const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize().then(
        () => {
          console.log('go to dashboard');
        },
        error => {
          console.log(error);
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};

const App = () => {
  return (
    <Auth0Provider
      clientId={'sFMiYHcDt01nIuzHHHUn7oYyNKOxm3rt'}
      domain={'squadmin-dev.eu.auth0.com'}>
      <SafeAreaView>
        <LoginButton />
      </SafeAreaView>
    </Auth0Provider>
  );
};
export default App;
