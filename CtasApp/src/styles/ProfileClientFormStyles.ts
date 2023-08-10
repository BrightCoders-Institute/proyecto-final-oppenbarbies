import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProfileClientFormStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mint,
    width: 355,
    height: 415,
    marginTop: 20,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
    marginTop: 2,
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'left',
    marginLeft: 9,
  },
  info: {
    flexDirection: 'row',
  },
  infoText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 10,
    color: Colors.lowBlack,
    marginLeft: 90,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 130,
    height: 38,
    backgroundColor: Colors.skyBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
  },
  errorStyles: {
    color: 'red',
    marginBottom: 5,
  },
  iconPress: {
    position: 'absolute',
    right: 20,
    top: '55%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.semiTransparentBlack,
  },
  textInputPress: {
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
    height: 38,
    width: '94%',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  textCounter: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
});

export default ProfileClientFormStyles;
