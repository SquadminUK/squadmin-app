import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AuthContext} from '../../Contexts/AuthContext';
import Screen from '../../Components/Screen/Screen';
import {styles} from './HomeScreen.style';
import GlobalStyles from '../../Styles/GlobalStyles';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import Modal from 'react-native-modal';
import {Colors} from '../../Colors/Colors';

const HomeScreen = ({navigation}) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [enteredDateOfBirth, setEnteredDateOfBirth] = useState('');

  useEffect(() => {
    if (
      currentUser.dateOfBirth === '' ||
      currentUser.dateOfBirth === undefined
    ) {
      // setModalVisible(!isModalVisible);
    }
  }, [currentUser]);

  return (
    <Screen>
      <SafeAreaView style={styles.scrollView}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={GlobalStyles.paragraphText}>
            First time here? If you organise games regularly you could start by
            settings up a Squad to make things easier. Otherwise sit back and
            wait for some invites to come through.{'\n\n'} Alternatively you
            could organise a game yourself.
          </Text>
        </ScrollView>
        <PrimaryButton
          title={'Organise a new game'}
          onPress={() => {
            console.log('organise new game pressed');
            setModalVisible(true);
          }}
        />
      </SafeAreaView>
      <Modal
        avoidKeyboard={true}
        backdropOpacity={1}
        isVisible={isModalVisible}
        coverScreen={false}
        hasBackdrop={true}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 12,
            padding: 16,
          }}>
          <Text style={GlobalStyles.darkTitle}>Safeguarding</Text>
          <Text>
            Our system has detected you don't have your date of birth set. To
            safeguard our younger members we require all users of the app to set
            their date of birth.
          </Text>
          <TextInput
            value={enteredDateOfBirth}
            onChangeText={text => {
              console.log(text);
            }}
          />

          <Button title="Hide modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </Screen>
  );
};

export default HomeScreen;
