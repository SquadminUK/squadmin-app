import HomeScreen from '../Screens/Home/HomeScreen';
import GameDetails from '../Screens/GameDetails/GameDetails';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="GameDetails" component={GameDetails} />
    </HomeStack.Navigator>
  );
};

export default HomeScreenStack;
