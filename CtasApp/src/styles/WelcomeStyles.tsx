import {StyleSheet} from 'react-native';
import colors from './colors/Colors';
const WelcomeStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.57,
    backgroundColor: colors.aqua,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bodyContainer:{
    flex: 0.43,
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
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold'
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
    borderRadius: 20,
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
    fontFamily: 'Inter-Thin',
    color: colors.black,
  },
  footerLink:{
    color: colors.aqua,
    fontFamily: 'Inter-Bold'
  }

});

export default WelcomeStyles;