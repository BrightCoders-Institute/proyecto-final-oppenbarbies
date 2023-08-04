import {StyleSheet} from 'react-native';
import {Colors} from './colors/Colors';


export const BtnSignInStyles = StyleSheet.create({
  btnSignIn:{
    display: 'flex',
    flexDirection: 'row',
    width: 280,
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    backgroundColor: Colors.lightGray,
    shadowColor: Colors.black,
  },
  btnText : {
    fontFamily: "Inter-ExtraBold",
    fontSize: 16,
    marginLeft: 12
  }
});


