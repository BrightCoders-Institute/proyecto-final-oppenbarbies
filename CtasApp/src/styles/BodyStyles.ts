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
    paddingBottom: 10,
    paddingTop: 15,
    justifyContent: 'space-between',
  }
});

export default BodyStyles;