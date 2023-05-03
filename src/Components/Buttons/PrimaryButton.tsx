import {Button} from 'react-native';

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

const PrimaryButton = (props: ButtonProps) => {
  return <Button title={props.title} onPress={props.onPress} />;
};

export default PrimaryButton;
