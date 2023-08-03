import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NavbarStyles from '../styles/NavbarStyles';

type Props = {}

const Navbar: React.FC<Props> = () => {
  return (
    <SafeAreaView style={NavbarStyles.container}>
      <View style={NavbarStyles.navbar}>
        <Text style={NavbarStyles.selected}>X</Text>
        <Text style={NavbarStyles.unselected}>Y</Text>
        <Text style={NavbarStyles.unselected}>Z</Text>
      </View>
    </SafeAreaView>
  )
}

export default Navbar;
