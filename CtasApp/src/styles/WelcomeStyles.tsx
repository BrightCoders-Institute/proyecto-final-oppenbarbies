import {StyleSheet} from 'react-native';
import colors from './colors/Colors';
const WelcomeStyles = StyleSheet.create({
  welcomeContainer: {
    flex: 0.57,
    backgroundColor: colors.aqua,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profilesContainer:{
    flex: 0.43,
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
});

export default WelcomeStyles;