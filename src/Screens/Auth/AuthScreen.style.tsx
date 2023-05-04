import {StyleSheet} from 'react-native';
import {Colors} from '../../Colors/Colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
  },
  usefulInformation: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  usefulInformationText: {
    color: Colors.white,
    fontSize: 16,
  },
});
