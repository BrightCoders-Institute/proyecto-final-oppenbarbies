import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

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
    fontFamily: 'Inter-Medium',
  },
  errorText: {
    position: 'absolute',
    top: 40,
    color: 'red',
    left: 15,
    fontSize: 12,
    opacity: 0.5,
    fontFamily: 'Inter-Medium',
  },
  list: {
    width: 334,
    maxHeight: 300,
    backgroundColor: Colors.aqua,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  itemText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.white,
  },
});

export default InputFieldStyles;
