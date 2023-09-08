import {View, Text} from 'react-native';
import React from 'react';
import BodyStyles from '../styles/BodyStyles';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CustomCalendar from '../components/CustomCalendar';
import {ConfigDayStyles as styles} from '../styles/ConfigDaysStyles/ConfigDaysStyles'

const ConfigAvailableDays: React.FC = () => {
  return (
    <View style={BodyStyles.container}>
      <Header title="Set schedule" />
      <View style={BodyStyles.bodyContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.text}>Choose your unavailable days:</Text>
        </View>
        <CustomCalendar/>
        <Navbar />
      </View>
    </View>
  );
};

export default ConfigAvailableDays;