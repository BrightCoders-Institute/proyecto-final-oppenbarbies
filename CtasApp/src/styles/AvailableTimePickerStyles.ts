import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors/Colors';

const windowWidth = Dimensions.get('window').width;

const AvailableTimePickerStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  timePicker: {
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'Inter-Bold',
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  title: {
    fontWeight: 'bold',
  },
  timePickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 5,
  },
  centeredButton: {
    alignSelf: 'center',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 15,
  },
  buttonContainer: {
    paddingHorizontal: windowWidth < 370 ? 25 : 45,
    paddingVertical: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 55,
    top: 14,
  },
  slot: {
    marginTop: 7,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: Colors.babyBlue,
  },
});

export default AvailableTimePickerStyles;
