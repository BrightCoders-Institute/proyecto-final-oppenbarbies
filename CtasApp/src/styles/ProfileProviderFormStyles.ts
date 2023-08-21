import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProfileProviderFormStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mint,
    marginTop: 12,
    borderRadius: 10,
    padding: 10,
  },
  titleText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 7,
  },
  text: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'left',
    marginLeft: 9,
  },
  textInputPress: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.skyBlue,
    borderColor: Colors.skyBlue,
    borderWidth: 1,
    padding: 4,
  },
  modalText: {
    marginTop: 6,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'left',
  },
  descriptionContainer: {
    textAlign: 'left',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 2,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.semiTransparentBlack,
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
    color: Colors.strongGray,
    textAlign: 'right',
  },
  inputDescription: {
    textAlign: 'left',
    backgroundColor: Colors.lowWhite,
    borderRadius: 10,
    fontFamily: 'Inter-ExtraBold',
    paddingLeft: 10,
    height: 70,
    width: 334,
    color: Colors.strongGray,
  },
  characterLimitWarning: {
    color: 'red',
    textAlign: 'left',
    marginRight: 90,
  },
  addressContainer: {
    marginBottom: 5,
    padding: 3,
  },

});

export default ProfileProviderFormStyles;
