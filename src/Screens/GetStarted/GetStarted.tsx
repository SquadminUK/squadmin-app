import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Screen from '../../Components/Screen/Screen';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import styles from './GetStarted.style';

const GetStarted = ({navigation}) => {
  return (
    <Screen>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.brandingContainer}>
          <Text style={styles.brandingTitle}>Squadmin</Text>
          <Text style={styles.brandingSubtitle}>
            Organising games made easier
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Get started'}
            onPress={() => {
              navigation.navigate('AuthScreen');
            }}
          />
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default GetStarted;
