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
  txtDate: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    marginLeft: 10
  },
  txtDateTime: {
    marginLeft: 25,
    fontSize: 14
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
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  personInfo: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  locationContainer: {
    flexDirection: 'column',
    marginLeft: 25,
    width: 115,
    borderWidth: 1,
    alignItems: 'center'
  }
});
