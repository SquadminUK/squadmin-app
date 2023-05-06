import {StyleSheet} from 'react-native';
import {Colors} from '../../Colors/Colors';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
  },
  errorInput: {
    borderColor: Colors.red,
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
  },
});
