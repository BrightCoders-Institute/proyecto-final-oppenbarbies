import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const HomeClientScreenStyles = StyleSheet.create({
  body:{
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
  },
  nameContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 15,
    width: 200,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 35,
    color: Colors.black,
    textAlign: 'right',
  },
  details: {
    color: Colors.black,
    textAlign: 'center',
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
    right: 0,
    color: Colors.black,
  },
  rateContainer:{
    alignItems: 'center',
    position: 'absolute',
    bottom: 365,
    width: '100%',
  },
  rate:{
    backgroundColor: Colors.aqua,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 50,
    gap: 6,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateText:{
    color: Colors.white,
    fontWeight: 'bold',
  }
});

export default HomeClientScreenStyles;