import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProfileClientSimpleCardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.aqua,
    width: 355,
    height: 308,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
    marginTop: 20,
  },
  userType: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.white,
    marginTop: 6,
    marginLeft: '78%',
    opacity: 0.5,
  },
  userImageContainer: {
    width: 141,
    height: 141,
    borderRadius: 100,
    marginTop: 13,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  userImage: {
    width: 141,
    height: 141,
    borderRadius: 100,
  },
  userName: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 29,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 8,
  },
  userEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ProfileClientSimpleCardStyles;
