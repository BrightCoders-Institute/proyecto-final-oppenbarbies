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
    height: 140,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoHeader: {
    gap: 2,
  },
  icon: {
    color: Colors.aqua,
  },
  name: {
    fontFamily: 'Inter-ExtraBold',
    color: Colors.black,
    fontSize: 17,
  },
  infoText: {
    fontFamily: 'Inter-SemiBold',
    color: Colors.black,
    fontSize: 12,
  },
  infoDescription: {
    fontFamily: 'Inter-Regular',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  rate: {
    backgroundColor: Colors.aqua,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  rateNumber: {
    fontFamily: 'Inter-Bold',
    color: Colors.white,
  },
});
