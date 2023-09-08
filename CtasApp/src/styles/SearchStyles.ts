import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const SearchStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: Colors.aqua,
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
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
    paddingTop: 15,
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: Colors.aqua
  },
  suggestionContainer: {
    justifyContent: 'center',
    paddingHorizontal: 7,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: -20,
    paddingTop: 15,
    borderColor: Colors.aqua
  }, lastSuggestionItem: {
    borderBottomWidth: 0,
  }
});
