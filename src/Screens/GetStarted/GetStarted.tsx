import React, {useContext} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Screen from '../../Components/Screen/Screen';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import styles from './GetStarted.style';
import SquadminLogo from '../../images/squadmin-logo.png';
import GlobalStyles from '../../Styles/GlobalStyles';
import {useAuth0} from 'react-native-auth0';
import {AuthContext} from '../../Contexts/AuthContext';

// @ts-ignore
const GetStarted = ({navigation}) => {
  const {user} = useAuth0();
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  return (
    <Screen>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.brandingContainer}>
          <Image source={SquadminLogo} />
          <Text style={GlobalStyles.brandingTitle}>Squadmin</Text>
          <Text style={GlobalStyles.brandingSubtitle}>
            Organising games effortlessly
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Get started'}
            onPress={() => {
              if (user) {
                setCurrentUser({
                  ...currentUser,
                  firstName: user.given_name,
                  lastName: user.family_name,
                  emailAddress: user.email,
                });
                navigation.navigate('HomeContainer');
              } else {
                navigation.navigate('Authenticate');
              }
            }}
          />
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default GetStarted;
