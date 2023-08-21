import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

const WelcomeStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.57,
    backgroundColor: Colors.aqua,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: wp('6%'),
  },
  bodyContainer: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: windowWidth < 400 ? 40 : 55,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    marginBottom: wp('5%'),
  },
  description: {
    fontSize: windowWidth < 400 ? 15 : 20,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    paddingHorizontal: 2,
    marginTop: wp('5%'),
  },
  profilesContainer: {
    flexDirection: 'row',
    marginHorizontal: 22,
    gap: 25,
  },
  profile: {
    flex: 1,
    gap: 5,
  },
  profileLogo: {
    height: '65%',
    width: '95%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colors.skyBlue,
    paddingVertical: 8,
    borderRadius: 12,
    elevation: 7,
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  footerText: {
    fontFamily: 'Inter-Light',
    color: Colors.black,
  },
  footerLink: {
    color: Colors.aqua,
    fontFamily: 'Inter-Bold',
  },
});

export default WelcomeStyles;
