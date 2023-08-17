import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const BodyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aqua,
  },
  headerContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 30,
    color: Colors.white,
    paddingHorizontal: 10,
  },
  bodyContainer: {
    flex: 0.85,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
});

export default BodyStyles;