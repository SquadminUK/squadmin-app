import {StyleSheet} from 'react-native';
import {Colors} from '../../Colors/Colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  brandingTitle: {
    color: Colors.white,
    fontSize: 32,
  },
  brandingSubtitle: {
    color: Colors.white,
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    // backgroundColor: 'red',
  },
});

export default styles;
