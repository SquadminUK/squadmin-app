import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppSettings from '../Screens/AppSettings';

const SettingsStack = createNativeStackNavigator();

const SettingsScreenStack = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={'Settings'} component={AppSettings} />
    </SettingsStack.Navigator>
  );
};

export default SettingsScreenStack;
