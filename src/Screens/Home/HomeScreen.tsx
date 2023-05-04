import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {AuthContext} from '../../Contexts/AuthContext';
import Screen from '../../Components/Screen/Screen';
import { styles } from "./HomeScreen.style";

const HomeScreen = ({navigation}) => {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  return (
    <Screen>
      <SafeAreaView>
        <Text>Home</Text>
        <Text>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
        <Text>{'Email:' + currentUser.emailAddress}</Text>
        <ScrollView style={styles.scrollView}>
          <Text>Scrollview</Text>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
};

export default HomeScreen;
