import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';
const WelcomeStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.55,
    backgroundColor: Colors.aqua,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bodyContainer: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
  },
  description: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    paddingHorizontal: 5,
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
