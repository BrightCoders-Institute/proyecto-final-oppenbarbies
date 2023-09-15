import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const AppointmentDetailsStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.aqua,
    flex: 1,
  },
  header: {
    backgroundColor: Colors.aqua,
    paddingBottom: 26,
  },
  backArrow: {
    justifyContent: 'center',
    width: 70,
    height: 55,
    backgroundColor: Colors.babyBlue,
    borderBottomRightRadius: 100,
    paddingLeft: 8,
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 40,
    color: Colors.white,
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.babyBlue,
    marginTop: 5,
  },
  labels: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    color: Colors.babyBlue,
    marginLeft: 40,
    marginTop: 5,
  },
  addressContainer: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  space: {
    padding: 30,
  },
});
export default AppointmentDetailsStyles;
