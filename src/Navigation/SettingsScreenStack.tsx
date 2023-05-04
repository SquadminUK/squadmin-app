import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../Screens/SettingsScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsScreenStack = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={'Settings'} component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsScreenStack;
