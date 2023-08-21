import * as React from 'react';
import {View} from 'react-native';
import AppointmentList from '../components/AppointmentList';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BodyStyles from '../styles/BodyStyles';

const MyAppointmentsScreen: React.FC = () => {
  return (
    <View style={BodyStyles.container}>
      <Header title='My Appointments'/>
      <View style={BodyStyles.bodyContainer}>
        <AppointmentList />
        <Navbar />
      </View>
    </View>
  );
};

export default MyAppointmentsScreen;
