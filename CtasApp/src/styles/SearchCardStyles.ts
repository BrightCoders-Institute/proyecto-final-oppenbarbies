import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

export const SearchCardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.babyBlueTransparent,
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 10,
  },
  imgProfile: {
    width: 90,
    height: 130,
    borderRadius: 10,
  },
  infoContainer:{
    flex: 1,
    justifyContent: 'space-between'
  },
  infoHeader:{
    gap: 2,
  },
  icon:{
    color: Colors.aqua,
  },
  name: {
    fontFamily: 'Inter-ExtraBold',
    color: Colors.black,
    fontSize: 17,
  },
  infoText:{
    fontFamily: 'Inter-SemiBold',
    color: Colors.black,
    fontSize: 14,
  },
  infoDescription: {
    fontFamily: 'Inter-Regular',
    textAlign: 'justify',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  gap: {
    gap: 20,
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});