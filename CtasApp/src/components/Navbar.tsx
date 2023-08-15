import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import NavbarStyles from '../styles/NavbarStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Navbar: React.FC = React.memo(() => {
  const [selectedIcon, setSelectedIcon] = useState('user-alt');
  const navigation = useNavigation<any>();

  const handleIconPress = (iconName: string) => {
    setSelectedIcon(iconName);

    switch (iconName) {
      case 'user-alt':
        navigation.navigate('HomeClient');
        break;
      case 'calendar-day':
        navigation.navigate('MyAppointments');
        break;
      case 'search':
        navigation.navigate('SearchScreen');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={NavbarStyles.container}>
      <View style={NavbarStyles.navbar}>
        <TouchableOpacity onPress={() => handleIconPress('user-alt')}>
          <FontAwesome5 
            style={[
              NavbarStyles.icon,
              selectedIcon === 'user-alt' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="user-alt" 
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('calendar-day')}>
          <FontAwesome5
            style={[
              NavbarStyles.icon,
              selectedIcon === 'calendar-day' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="calendar-day"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('search')}>
          <FontAwesome5 
            style={[
              NavbarStyles.icon,
              selectedIcon === 'search' ? NavbarStyles.selected : NavbarStyles.unselected,
            ]}
            name="search" 
            size={25} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default Navbar;
