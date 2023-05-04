import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import Screen from '../../Components/Screen/Screen';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import {styles} from './AuthScreen.style';
import {AuthContext} from '../../Contexts/AuthContext';

// @ts-ignore
const AuthScreen = ({navigation}) => {
  const {authorize, user} = useAuth0();
  const currentUser = useContext(AuthContext);
  const startAuthentication = async () => {
    try {
      await authorize().then(
        () => {
          navigation.navigate('HomeContainer');
        },
        error => {
          console.log(error);
        },
      );
    } catch (error) {}
  };

  return (
    <Screen>
      <SafeAreaView>
        <View>
          <Text>hello</Text>
        </View>
        <View style={styles.getStartedContainer}>
          <PrimaryButton title={'Authenticate'} onPress={startAuthentication} />
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default AuthScreen;
