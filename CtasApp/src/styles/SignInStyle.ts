import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from './colors/Colors';

const windowWidth = Dimensions.get('window').width;

export const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '62%',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: Colors.aqua,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    color: Colors.white,
    marginTop: hp('6%'),
    fontSize: windowWidth < 370 ? 45 : 55,
    width: '70%',
  },
  btnContainer: {
    alignSelf: 'center',
    width: '83%',
    height: 300,
    borderRadius: 10,
    marginTop: -130,
    backgroundColor: Colors.white,
    elevation: 6,
    shadowColor: Colors.black,
    alignItems: 'center',
  },
  btnGoogleContainer: {
    marginTop: 70,
  },
  btnFacebookContainer: {
    marginTop: 50,
  },
  txtNote: {
    marginTop: hp('2%'),
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    fontSize: windowWidth < 400 ? 13 : 25,
    width: '83%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  txtBold: {
    fontFamily: 'Inter-Bold',
  },
});
