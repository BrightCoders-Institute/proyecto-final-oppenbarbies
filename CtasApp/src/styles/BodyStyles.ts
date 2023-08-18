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
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 30,
    color: Colors.white,
  },
  bodyContainer: {
    flex: 0.85,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    gap: 20
  }
});

export default BodyStyles;