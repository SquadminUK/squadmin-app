import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
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
import {Modals} from '../../Styles/Modals.style';
import {isValidDate} from '../../Utils/Date/DateUtils';
import 'react-native-get-random-values';
import {SquadminImage} from '../../images/Image';

const HomeScreen = ({navigation}) => {
  // @ts-ignore
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [enteredDateOfBirth, setEnteredDateOfBirth] = useState('');

  useEffect(() => {
    if (
      currentUser.dateOfBirth === '' ||
      currentUser.dateOfBirth === undefined
    ) {
      setTimeout(() => {
        if (!isValidDate(currentUser.dateOfBirth)) {
          setModalVisible(true);
        }
      }, 3000);
    }
  }, [currentUser]);

  return (
    <Screen>
      <SafeAreaView style={styles.scrollView}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Image source={SquadminImage.squadminLogo} />
          <Text style={GlobalStyles.paragraphText}>
            First time here? If you organise games regularly you could start by
            settings up a Squad to make things easier. Otherwise sit back and
            wait for some invites to come through.{'\n\n'} Alternatively you
            could organise a game yourself.
          </Text>
        </ScrollView>
        <PrimaryButton
          isDisabled={false}
          title={'Organise a new game'}
          onPress={() => {
            // setModalVisible(true);
          }}
        />
      </SafeAreaView>
      <Modal
        animationOutTiming={500}
        animationOut={'slideOutDown'}
        avoidKeyboard={true}
        isVisible={isModalVisible}
        coverScreen={false}
        hasBackdrop={true}
        backdropOpacity={0.3}>
        <View style={Modals.container}>
          <Text style={GlobalStyles.darkTitle}>Safeguarding</Text>
          <Text style={Modals.paragraph}>
            Our system has detected you don't have your date of birth set. To
            safeguard our younger users we require all users of the app to set
            their date of birth.
          </Text>
          <Text>Please enter your date of birth below</Text>
          <TextInput
            maxLength={10}
            style={
              isValidDate(enteredDateOfBirth) ? styles.input : styles.errorInput
            }
            inputMode={'numeric'}
            placeholder={'DD/MM/YYYY'}
            placeholderTextColor={Colors.primary}
            value={enteredDateOfBirth}
            onChangeText={text => {
              setEnteredDateOfBirth(text);
            }}
          />

          <PrimaryButton
            isDisabled={!isValidDate(enteredDateOfBirth)}
            title={'Update'}
            onPress={() => {
              setCurrentUser({
                ...currentUser,
                dateOfBirth: enteredDateOfBirth,
              });
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </Screen>
  );
};

export default HomeScreen;
