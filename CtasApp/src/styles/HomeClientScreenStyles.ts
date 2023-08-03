import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const HomeClientScreenStyles = StyleSheet.create({
  body:{
    backgroundColor: Colors.white,
    flex: 1,
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
  photoContainer: {
    marginTop: 80,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  gear: {
    position: 'absolute',
    top: 0,
    right: 120,
    color: Colors.black,
  },
});

export default HomeClientScreenStyles;