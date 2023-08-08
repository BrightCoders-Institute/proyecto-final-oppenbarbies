import React from 'react';
import {View, Text} from 'react-native';
import ProviderInformation from '../components/ProviderInformation';

type Props = {};

const ProfileProviderScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>ProfileProviderScreen</Text>
      <ProviderInformation name='Lic. Valeriano Perez' age={26} location='Colima, Villa de Álvarez '/>
    </View>
  );
};

export default ProfileProviderScreen;
