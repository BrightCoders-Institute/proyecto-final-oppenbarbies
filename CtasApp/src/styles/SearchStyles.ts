import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const SearchStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.aqua,
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 25,
    paddingBottom: 20,
  },
  headerContainer: {
    flex: 0.15,
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
  },
  bodyContainer: {
    flex: 0.85,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: Colors.aqua,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
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
    marginBottom: 120,
  },
});
