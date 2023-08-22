import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const NavbarStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  navbar: {
    borderRadius: 50,
    backgroundColor: Colors.skyBlue,
    flexDirection: 'row',
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
