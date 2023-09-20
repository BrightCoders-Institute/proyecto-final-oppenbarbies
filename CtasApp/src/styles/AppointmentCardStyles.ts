import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const AppointmentCardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 10,
  },
  cardContainer: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5,
    shadowColor: Colors.black,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtDate: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.black,
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 2,
    alignItems: 'center',
  },
  txtDateTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.black,
  },
  divider: {
    height: 0,
    borderBottomWidth: 0.6,
    paddingVertical: 2,
    borderColor: Colors.lowBlack,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  personInfoContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  imgPerson: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  personInfo: {
    justifyContent: 'center',
  },
  txtName: {
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    color: Colors.black,
  },
  txtDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.black,
  },
  locationContainer: {
    flexDirection:'row',
    marginTop: 3,
    gap: 3,
  },
  txtLocation: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: Colors.black,
  },
  modalContainer: {
    height: 'auto',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 4,
    backgroundColor: Colors.lightGray,
    shadowColor: Colors.black,
    padding: 20,
    justifyContent: 'center',
    marginTop: 15,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.semiTransparentBlack,
  },
  lineSide: {
    width: 3.5,
    height: 100,
    position: 'absolute',
    backgroundColor: Colors.skyBlue,
    marginTop: 25,
    borderRadius: 5,
  },
  modalCenteredView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
