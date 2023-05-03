import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './Screen.style';

class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView style={style.screenContainer}>
        {/*@ts-ignore*/}
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default Screen;
