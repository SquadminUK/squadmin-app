import React, {useContext} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import Screen from '../../Components/Screen/Screen';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import {styles} from './AuthScreen.style';
import {AuthContext} from '../../Contexts/AuthContext';
import GlobalStyles from '../../Styles/GlobalStyles';
import SquadminLogo from '../../images/squadmin-logo.png';

// @ts-ignore
const AuthScreen = ({navigation}) => {
  const {authorize, user} = useAuth0();
  //@ts-ignore
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const startAuthentication = async () => {
    try {
      await authorize().then(
        () => {
          setCurrentUser({
            ...currentUser,
            firstName: user.given_name,
            lastName: user.family_name,
            emailAddress: user.email,
          });
          // TODO: make an api call to get the full user details (if they exist in the DB)
          navigation.navigate('HomeContainer');
        },
        error => {
          console.log(error);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <SafeAreaView style={styles.screenContainer}>
        <Image source={SquadminLogo} />
        <View style={styles.usefulInformation}>
          <Text style={GlobalStyles.brandingTitle}>Squadmin</Text>
          <Text style={GlobalStyles.brandingSubtitle}>
            Sign up or Sign in via the authenticate button, organising games has
            never been easier
          </Text>
        </View>
        <View style={styles.getStartedContainer}>
          <PrimaryButton title={'Authenticate'} onPress={startAuthentication} />
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default AuthScreen;
