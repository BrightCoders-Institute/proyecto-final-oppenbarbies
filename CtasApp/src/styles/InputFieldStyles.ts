import {StyleSheet} from 'react-native';
import Colors from './colors/colors';

const InputFieldStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: 334,
    height: 38,
    backgroundColor: Colors.white,
    borderColor: Colors.skyBlue,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
});

export default InputFieldStyles;
