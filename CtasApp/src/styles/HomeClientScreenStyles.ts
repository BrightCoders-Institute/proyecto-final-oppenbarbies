import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const HomeClientScreenStyles = StyleSheet.create({
  body:{
    backgroundColor: Colors.white,
  },
  nameContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
    gap: 30,
    marginTop: 30,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 35,
    color: Colors.black,
  },
  details: {
    color: Colors.black,
  },
});

export default HomeClientScreenStyles;