import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.semiTransparentBlack,
  },
  container: {
    width: 250,
    height: 250,
    alignItems: 'center',
    backgroundColor: Colors.darkAqua,
    borderRadius: 10,
    padding: 5,
  },
  animationContainer: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Inter-Regular',
  },
});
