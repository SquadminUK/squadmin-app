import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenStack from '../../Navigation/HomeScreenStack';
import SquadScreenStack from '../../Navigation/SquadStack';
import SettingsScreenStack from '../../Navigation/SettingsScreenStack';

const Tab = createBottomTabNavigator();

const HomeContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeTab'}
        component={HomeScreenStack}
        options={{headerShown: false, title: 'Home', }}
      />
      <Tab.Screen name="Squads" component={SquadScreenStack} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={SettingsScreenStack} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default HomeContainer;
