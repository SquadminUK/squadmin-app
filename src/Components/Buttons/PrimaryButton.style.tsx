import {StyleSheet} from 'react-native';
import {Colors} from '../../Colors/Colors';

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 12,
    flexGrow: 1,
    justifyContent: 'center',
    height: 48,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default styles;
