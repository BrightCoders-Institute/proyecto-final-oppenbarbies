import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const CustomCalendarStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendarContainer: {
    paddingHorizontal: 45,
    marginTop: 5,
  },
  calendar: {
    borderColor: Colors.babyBlue,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  modalBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.SemiTransparentBlack,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default CustomCalendarStyles;
