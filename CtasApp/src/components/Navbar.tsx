import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import NavbarStyles from '../styles/NavbarStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../schema/SignInScreenSchema';
import {MENU_ITEMS} from '../constants/NavbarConstants';

const Navbar: React.FC = () => {
  const navigation =
    useNavigation() as NativeStackNavigationProp<RootStackParamList>;
  const route = useRoute() as any;

  const handleIconPress = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName as any);
  };

  return (
    <View style={NavbarStyles.container}>
      <View style={NavbarStyles.navbar}>
        {MENU_ITEMS.map(item => (
          <TouchableOpacity
            key={item.screen}
            onPress={() => handleIconPress(item.screen)}>
            <FontAwesome5
              style={[
                NavbarStyles.icon,
                route.name === item.screen
                  ? NavbarStyles.selected
                  : NavbarStyles.unselected,
              ]}
              name={item.name}
              size={25}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default React.memo(Navbar);
