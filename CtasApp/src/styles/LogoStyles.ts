import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LogoStyles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('3%'),
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoWb: {
    width: 230,
    height: 185,
    resizeMode: 'contain',
  },
  logoBanner: {
    width: 50,
    height: 50,
  },
});

export default LogoStyles;
