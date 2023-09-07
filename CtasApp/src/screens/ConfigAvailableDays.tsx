import {View, Text} from 'react-native';
import React from 'react';
import BodyStyles from '../styles/BodyStyles';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CustomCalendar from '../components/CustomCalendar';

const ConfigAvailableDays: React.FC = () => {
  return (
    <View style={BodyStyles.container}>
      <Header title="Set schedule" />
      <View style={BodyStyles.bodyContainer}>
        <Text>Configure your avaialable days</Text>
        <CustomCalendar/>
        <Navbar />
      </View>
    </View>
  );
};

export default ConfigAvailableDays;