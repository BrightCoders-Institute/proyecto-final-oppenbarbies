import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const NavbarStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  navbar: {
    backgroundColor: Colors.skyBlue,
    height: 60,
    width: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
  },
  selected: {
    backgroundColor: Colors.black,
    color: Colors.white,
  },
  unselected: {
    backgroundColor: Colors.skyBlue,
    color: Colors.black,
  },
  icon: {
    borderRadius: 50,
    fontWeight: 'bold',
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default NavbarStyles;
