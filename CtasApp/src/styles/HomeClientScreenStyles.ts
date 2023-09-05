import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeClientScreenStyles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    marginTop: 8,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
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
    gap: windowWidth < 370 ? 8 : 15,
    marginTop: windowWidth < 370 ? 6 : 15,
    width: 400,
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: windowWidth < 370 || windowHeight < 700 ? 25 : 30,
    color: Colors.black,
  },
  name: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: windowWidth < 370 || windowHeight < 700 ? 25 : 30,
    color: Colors.black,
    textAlign: 'center',
    marginLeft: 20,
  },
  details: {
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: windowWidth < 370 || windowHeight < 650 ? 12 : 17,
    marginBottom: 14,
    paddingHorizontal: 80,
  },
  photoContainer: {
    marginTop: windowWidth < 370 ? 35 : 45,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: wp('38%'),
    height: wp('38%'),
    borderRadius: 100,
  },
  gear: {
    marginLeft: 90,
    color: Colors.strongGray,
  },
  rateContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: windowWidth < 370 ? 300 : 405,
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
