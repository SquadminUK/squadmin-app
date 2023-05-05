import {StyleSheet} from 'react-native';
import {Colors} from '../Colors/Colors';

const GlobalStyles = StyleSheet.create({
  brandingTitle: {
    color: Colors.white,
    fontSize: 32,
    textAlign: 'center',
  },
  brandingSubtitle: {
    color: Colors.white,
    fontSize: 16,
  },
  paragraphText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  darkTitle: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 32,
  },
});

export default GlobalStyles;
