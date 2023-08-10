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
  selectedItemText: {
    fontSize: 18,
    fontFamily: 'Inter-ExtraBold',
    color: Colors.blockText,
    textAlign: 'left',
  },
  addressContainer: {
    width: 320,
    backgroundColor: Colors.block,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
    maxHeight: 170,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    fontFamily: 'Inter-ExtraBold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconAddDown: {
    position: 'absolute',
    right: 10,
  },
  addAddressIcon: {
    marginLeft:10,
    
  },
  AddText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 18,
    color: Colors.blockText,
    textAlign: 'center',
  },
  line: {
    width: 290,
    height: 2,
    backgroundColor: Colors.blockText,
    borderRadius: 10,
    opacity: 0.4,
  },
});
export default InputFieldStyles;
