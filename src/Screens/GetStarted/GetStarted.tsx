import React from 'react';
import {Text, View} from 'react-native';
import Screen from '../../Components/Screen/Screen';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import styles from './GetStarted.style';
import fonts from '../../fonts/Fonts';

const GetStarted = ({navigation}) => {
  return (
    <Screen>
      <View style={styles.getStartedContainer}>
        <View style={styles.getStartedTextContainer}>
          <Text style={fonts.heading}>Squadmin</Text>
          <Text style={fonts.subheading}>Organising games effortlessly</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Get started'}
            onPress={() => {
              navigation.navigate('Auth');
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default GetStarted;
