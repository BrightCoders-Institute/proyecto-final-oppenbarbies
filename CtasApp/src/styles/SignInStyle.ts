import {StyleSheet} from 'react-native';
import {Colors} from './colors/Colors';

export const SignInStyles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerContainer:{
    height: '62%',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: Colors.aqua,
    alignItems: 'center',
  },
  title: {
    fontFamily: "Inter-ExtraBold",
    color: Colors.white,
    marginTop: 60,
    fontSize: 50,
    width: '70%',
  },
  btnContainer:{
    alignSelf: 'center',
    width: '83%',
    height: 300,
    borderRadius: 10,
    marginTop: -130,
    backgroundColor: Colors.white,
    elevation: 6,
    shadowColor: Colors.black,
    alignItems: 'center'
  },
  btnGoogleContainer:{
    marginTop: 70,
  },
  btnFacebookContainer:{
    marginTop: 50,
  },
  txtNote: {
    marginTop: 25,
    fontFamily: "Inter-Regular",
    fontStyle: 'italic',
    fontSize: 16,
    width: '83%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  txtBold: {
    fontFamily: 'Inter-Bold'
  },

});


