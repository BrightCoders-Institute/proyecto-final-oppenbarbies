import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const CustomCalendarStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendarContainer: {
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
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
