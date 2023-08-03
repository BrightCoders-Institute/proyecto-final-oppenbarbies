import {StyleSheet} from 'react-native';
import colors from './colors/Colors';
const WelcomeStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.55,
    backgroundColor: colors.aqua,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bodyContainer: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    gap: -20,
  },
  title: {
    fontSize: 40,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
  },
  description: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    paddingHorizontal: 5,
  },
  profilesContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 30,
  },
  profile: {
    flex: 1,
    gap: 5,
  },
  profileLogo: {
    height: '65%',
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.skyBlue,
    paddingVertical: 6,
    borderRadius: 15,
    elevation: 7,
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    fontSize: 17,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  footerText: {
    fontFamily: 'Inter-Light',
    color: colors.black,
  },
  footerLink: {
    color: colors.aqua,
    fontFamily: 'Inter-Bold',
  },
});

export default WelcomeStyles;
