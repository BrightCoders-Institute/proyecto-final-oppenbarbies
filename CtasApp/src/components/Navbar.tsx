import React from 'react';
import {View, SafeAreaView} from 'react-native';
import NavbarStyles from '../styles/NavbarStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Navbar: React.FC = () => {
  return (
    <SafeAreaView style={NavbarStyles.container}>
      <View style={NavbarStyles.navbar}>
        <FontAwesome5 style={NavbarStyles.selected} name="user-alt" size={25} />
        <FontAwesome5
          style={NavbarStyles.unselected}
          name="calendar-day"
          size={25}
        />
        <FontAwesome5 style={NavbarStyles.unselected} name="search" size={25} />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
