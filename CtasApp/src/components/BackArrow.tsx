import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import {useNavigation} from '@react-navigation/native';

const BackArrow: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={ProviderSetCitaStyles.backArrow} onPress={goBack}>
      <Ionicons name="arrow-back" size={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default BackArrow;
