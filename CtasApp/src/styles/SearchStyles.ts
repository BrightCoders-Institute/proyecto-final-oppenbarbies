import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const SearchStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: Colors.aqua,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    paddingHorizontal: 0,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    flex: 1,
  },
  icon: {
    color: Colors.black,
  },
  separator: {
    height: 15,
  },
  listContainer: {
    flex: 1,
  },
});
