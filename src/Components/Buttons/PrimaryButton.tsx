import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './PrimaryButton.style';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  isDisabled: boolean;
};

const PrimaryButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={props.isDisabled}
      style={styles.primaryButton}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
