import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const AppoinmentCardStyles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 15,
    backgroundColor: Colors.lightGray,
    shadowColor: Colors.black,
    padding: 12
  },
  headerContainer: {
    flexDirection: 'row'
  },
  dateContainer: {
    flexDirection: 'row'
  },
  txtDate: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    marginLeft: 10
  },
  txtDateTime: {
    fontSize: 14
  },
  clockIcon: {
    marginLeft: 26
  },
  divider:{
    height:0,
    borderBottomWidth: 0.6,
    marginTop: 7,
    borderColor: Colors.lowBlack,
  },
  footContainer:{
    flexDirection: 'row'
  },
  personInfoContainer:{
    flexDirection: 'row',
    height: 75,
    marginTop: 8,
  },
  imgPerson:{
    width: 60,
    height: 60,
    borderRadius: 100,
    marginTop: 6
  },
  personInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5
  },
  txtName: {
    fontSize: 12,
    fontFamily: 'Inter-Bold'
  },
  txtDescription: {
    fontSize: 11
  },
  locationContainer: {
    flexDirection: 'column',
    marginLeft: 25,
    width: 115,
    alignItems: 'center',
  },
  locationIcon:{
    marginTop: 20
  },
  deleteIcon:{
    marginLeft: 250,
  },
  txtLocation: {
    textAlign: 'center',
    fontSize: 10
  },
  
});
