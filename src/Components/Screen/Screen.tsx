import React from 'react';
import style from './Screen.style';
import {View} from 'react-native';

class Screen extends React.Component {
  render() {
    return (
      <View style={style.screenContainer}>
        {/*@ts-ignore*/}
        {this.props.children}
      </View>
    );
  }
}

export default Screen;
