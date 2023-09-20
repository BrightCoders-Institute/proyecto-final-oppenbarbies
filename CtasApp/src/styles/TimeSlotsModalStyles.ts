import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const TimeSlotsModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.semiTransparentBlack,
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: Colors.aqua,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 18,
    paddingBottom: 10,
    marginBottom: 10,
    borderColor: Colors.white,
    borderBottomWidth: 5,
  },
  listItem: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    color: 'white',
  },
  closeButton: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemDisabled: {
    color: 'gray',
  },
});

export default TimeSlotsModalStyles;
