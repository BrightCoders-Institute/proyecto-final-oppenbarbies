import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/MyAppoinmentSreenStyles';
import AppoinmentList from '../components/AppoinmentList';
import Navbar from '../components/Navbar';

const MyAppointmentsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtTitle}>My appointments</Text>
      </View>
      <View style={styles.bodyContainer}>
        <AppoinmentList/>
      </View>
      <Navbar/>
    </View>
  );
};

export default MyAppointmentsScreen;
