import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const MyAppointmentScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 150,
    backgroundColor: Colors.aqua,
  },
  txtTitle: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 30,
    color: Colors.white,
    marginTop: 70,
    marginLeft: 20,
  },
  bodyContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: -20,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 30,
  },
});

export default MyAppointmentScreenStyles;
