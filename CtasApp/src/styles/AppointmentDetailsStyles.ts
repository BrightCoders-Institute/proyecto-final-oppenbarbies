import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const AppointmentDetailsStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.aqua,
    flex: 1,
  },
  header: {
    backgroundColor: Colors.aqua,
    height: 100,
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    marginLeft: 20,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.babyBlue,
    marginTop: 10,
  },
  labels: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    color: Colors.babyBlue,
    marginLeft: 40,
    marginTop: 10,
  },
  addressContainer: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
});
export default AppointmentDetailsStyles;
