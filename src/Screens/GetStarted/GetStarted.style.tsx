import {StyleSheet} from 'react-native';
import {Colors} from '../../Colors/Colors';

const styles = StyleSheet.create({
  getStartedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    // alignSelf: 'flex-start',
    // justifyContent: 'flex-end',
  },
  brandingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandingTitle: {
    color: Colors.white,
    // fontFamily: fonts.PoppinsSemiBold,/
    fontSize: 32,
  },
  brandingSubtitle: {
    color: Colors.white,
    // fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
  },
});

export default styles;
