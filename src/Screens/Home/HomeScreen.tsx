import React, {useContext, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';
import {AuthContext} from '../../Contexts/AuthContext';
import Screen from "../../Components/Screen/Screen";

const HomeScreen = ({navigation}) => {
  // @ts-ignore
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  return (
    // <SafeAreaView>
    //   <Text>Home</Text>
    //   <Text>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
    //   <Text>{'Email:' + currentUser.emailAddress}</Text>
    //   <Button
    //     title={'Game details'}
    //     onPress={() => {
    //       // setCurrentUser({
    //       //   ...currentUser,
    //       //   emailAddress: user.emailAddress,
    //       // });
    //       // navigation.navigate('GameDetails');
    //     }}
    //   />
    // </SafeAreaView>
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
};

export default HomeScreen;
