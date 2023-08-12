import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';
import CalendarModal from '../components/CalendarModal';
import useCustomForm from '../hooks/useCustomForm';

const SetCitaScreen: React.FC = () => {
  const {setValue} =
    useCustomForm();
  const handleSetBirthdate = (date: string) => {
    setValue('birthDate', date);
  };
  return (
    <ScrollView>
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
          <Map adress='Laguna la coata #121 Colima, Villa de Álvarez, Col. Solidaridad '/>
          <Text style={ProviderSetCitaStyles.appointmentDetails}>Set an appointment</Text>
          <View style={ProviderSetCitaStyles.calendarContainer}>
            <CalendarModal setBirthdate={handleSetBirthdate}/>
          </View>
          <Pressable style={ProviderSetCitaStyles.button}>
            <Text style={ProviderSetCitaStyles.buttonText}>Request Appointment</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SetCitaScreen;
