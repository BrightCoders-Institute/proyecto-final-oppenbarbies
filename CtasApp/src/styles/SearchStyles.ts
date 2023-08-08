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
    paddingBottom: 20
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
    paddingTop: 25
  }
});
