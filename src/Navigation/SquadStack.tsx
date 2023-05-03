import React from 'react';
import SquadsScreen from '../Screens/Squads/SquadsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SquadStack = createNativeStackNavigator();

const SquadScreenStack = () => {
  return (
    <SquadStack.Navigator>
      <SquadStack.Screen name="Squad" component={SquadsScreen} />
    </SquadStack.Navigator>
  );
};

export default SquadScreenStack;
