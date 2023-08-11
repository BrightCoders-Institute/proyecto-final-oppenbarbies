import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProfileProviderFormStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mint,
    width: 355,
    height: 435,
    marginTop: 8,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 14,
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
    marginBottom: 3,
    marginTop: 5,
    height: 35,
    width: '94%',
    borderRadius: 10,
    backgroundColor: Colors.skyBlue,
    borderColor: Colors.skyBlue,
    borderWidth: 1,
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
    position: 'absolute',
    right: 25,
    bottom: 8,
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
  descriptionContainer: {
    textAlign: 'left',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  inputDescription: {
    textAlign: 'left',
    width: 334,
    backgroundColor: Colors.lowWhite,
    height: 80,
    borderRadius: 10,
    fontFamily: 'Inter-ExtraBold',
    paddingLeft: 10,
    color: Colors.strongGray,
  },
  modalText: {
    marginTop: 6,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'left',
  },
  characterLimitWarning: {
    color: 'red',
    textAlign: 'left',
    marginRight: 90,
  },
});

export default ProfileProviderFormStyles;
