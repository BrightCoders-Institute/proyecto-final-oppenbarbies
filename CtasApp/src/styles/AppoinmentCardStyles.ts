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
    padding: 12,
    marginTop: 15
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
    marginLeft: 10,
    color: Colors.black,
  },
  txtDateTime: {
    fontSize: 14,
    color: Colors.black,
    
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
    width: 210
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
    paddingLeft: 5,
  },
  txtName: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: Colors.black,
  },
  txtDescription: {
    fontSize: 11,
    color: Colors.black,
  },
  locationContainer: {
    flexDirection: 'column',
    marginLeft: 5,
    width: 115,
    alignItems: 'center',
  },
  locationIcon:{
    marginTop: 12
  },
  deleteIcon:{
    marginLeft: 250,
  },
  txtLocation: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.black,
  },
  lineSide: {
    width: 3.5,
    height: 100,
    position: 'absolute',
    backgroundColor: Colors.skyBlue,
    marginTop: 25,
    borderRadius: 5
    
  }
  
});
