import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const AddressPickerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  autocompleteContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.babyBlue,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  inputStyle: {
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: Colors.white,
    fontFamily: 'Inter-ExtraBold',
  },
});
export default AddressPickerStyles;
