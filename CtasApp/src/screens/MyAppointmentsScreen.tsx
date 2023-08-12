import * as React from 'react';
import {View, Text} from 'react-native';
import MyAppointmentScreenStyles from '../styles/MyAppointmentScreenStyles';
import AppointmentList from '../components/AppointmentList';
import Navbar from '../components/Navbar';

const MyAppointmentsScreen: React.FC = () => {
  return (
    <View style={MyAppointmentScreenStyles.container}>
      <View style={MyAppointmentScreenStyles.headerContainer}>
        <Text style={MyAppointmentScreenStyles.txtTitle}>My appointments</Text>
      </View>
      <View style={MyAppointmentScreenStyles.bodyContainer}>
        <AppointmentList />
      </View>
      <Navbar />
    </View>
  );
};

export default MyAppointmentsScreen;
