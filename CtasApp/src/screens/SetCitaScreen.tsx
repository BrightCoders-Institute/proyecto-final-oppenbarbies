import React from 'react';
import {View, Text} from 'react-native';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SetCitaScreen: React.FC = () => {
  return (
    <View style={ProviderSetCitaStyles.main}>
      <View style={ProviderSetCitaStyles.backArrow}>
        <Ionicons name="arrow-back" size={20} color="#ffff" />
      </View>
      <ProviderInformation
        name="Lic. Valeriano Perez"
        age={26}
        location="Villa de Alvarez, Col"
      />
      <View style={ProviderSetCitaStyles.body}>
        <Text style={ProviderSetCitaStyles.appointmentDetails}>
          Office Location
        </Text>
      </View>
    </View>
  );
};

export default SetCitaScreen;
