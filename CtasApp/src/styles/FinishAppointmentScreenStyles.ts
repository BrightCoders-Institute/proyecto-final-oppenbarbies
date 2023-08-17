import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const FinishAppointmentScreenStyles = StyleSheet.create({
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
    width: 50,
    height: 55,
    backgroundColor: Colors.babyBlue,
    borderBottomRightRadius: 100,
    paddingLeft: 4,
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
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    color: Colors.babyBlue,
    marginTop: 10,
  },
  addressContainer: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  button: {
    paddingHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    fontSize: 23,
  },
  buttonF: {
    backgroundColor: Colors.skyBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 7,
    shadowOpacity: 0.2,
  },
  iconContainer: {
    position: 'absolute',
    right: 65,
    top: 22,
  },
  buttonTextSlots: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'left',
    fontSize: 23,
  },
});
export default FinishAppointmentScreenStyles;