import {StyleSheet} from 'react-native';
import colors from './colors/Colors';
const WelcomeStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.60,
    backgroundColor: colors.aqua,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bodyContainer:{
    flex: 0.40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoTitle:{
    gap: 15,
  },
  title:{
    fontSize: 40,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold'
  },
  description:{
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
  profile:{
    flex: 1,
  },
  profileLogo:{
    height: 140,
    width: 140,
    alignSelf: 'center'
  },
  button:{
    backgroundColor: colors.skyBlue,
    paddingVertical: 10,
    borderRadius: 15,
    elevation: 5,
    shadowOpacity: 0.2,
  },
  buttonText:{
    color: colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    fontSize: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  footerText:{
    fontFamily: 'Inter-Light',
    color: colors.black,
  },
  footerLink:{
    color: colors.aqua,
    fontFamily: 'Inter-Bold'
  }

});

export default WelcomeStyles;