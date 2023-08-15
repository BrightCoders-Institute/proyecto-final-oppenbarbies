import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import NavbarStyles from '../styles/NavbarStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

const Navbar: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const handleIconPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={NavbarStyles.container}>
      <View style={NavbarStyles.navbar}>
      <TouchableOpacity onPress={() => handleIconPress('HomeClient')}>
          <FontAwesome5
            style={[
              NavbarStyles.icon,
              route.name === 'HomeClient' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="user-alt"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('MyAppointments')}>
          <FontAwesome5
            style={[
              NavbarStyles.icon,
              route.name === 'MyAppointments' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="calendar-day"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('SearchScreen')}>
          <FontAwesome5
            style={[
              NavbarStyles.icon,
              route.name === 'SearchScreen' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="search"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
