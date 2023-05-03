import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/Screens/GetStarted/GetStarted';
import AuthScreen from './src/Screens/Auth/AuthScreen';
import HomeContainer from './src/Screens/HomeContainer/HomeContainer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Auth0Provider
      domain={'squadmin-dev.eu.auth0.com'}
      clientId={'sFMiYHcDt01nIuzHHHUn7oYyNKOxm3rt'}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'GetStarted'}
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen name={'Auth'} component={AuthScreen} />
          <Stack.Screen
            name={'HomeContainer'}
            component={HomeContainer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
};
export default App;
