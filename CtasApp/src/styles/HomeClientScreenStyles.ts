import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const HomeClientScreenStyles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    
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
    fontFamily: 'Inter-ExtraBold',
    fontSize: 35,
    color: Colors.black,
    textAlign: 'right',
  },
  details: {
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginBottom: 14,
  },
  photoContainer: {
    marginTop: 80,
    marginBottom: 20,
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
  rateContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 365,
    width: '100%',
  },
  rate: {
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
  rateText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default HomeClientScreenStyles;
