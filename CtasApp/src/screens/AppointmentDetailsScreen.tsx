import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppointmentDetailsStyles from '../styles/AppointmentDetailsStyles';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvailableTimePicker from '../components/AvailableTimePicker';
import CustomCalendar from '../components/CustomCalendar';
import AddressPicker from '../components/AddressPicker';
import Button from '../components/Button';

const AppointmentDetailsScreen: React.FC = () => {
  return (
    <SafeAreaView style={AppointmentDetailsStyles.background}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={AppointmentDetailsStyles.header}>
          <View style={AppointmentDetailsStyles.backArrow}>
            <Ionicons name="arrow-back" size={40} color="#ffff" />
          </View>
          <Text style={AppointmentDetailsStyles.title}>
            Appointment details
          </Text>
        </View>
        <View style={AppointmentDetailsStyles.container}>
          <Text style={AppointmentDetailsStyles.text}>Edit Appointment</Text>
          <Text style={AppointmentDetailsStyles.labels}>Time:</Text>
          <AvailableTimePicker />
          <Text style={AppointmentDetailsStyles.labels}>
            Select Unavailable Dates:
          </Text>
          <CustomCalendar />
          <View style={AppointmentDetailsStyles.addressContainer}>
          <Text style={AppointmentDetailsStyles.labels}>Location:</Text>
            <AddressPicker />
            <View style={AppointmentDetailsStyles.button}>
            <Button
              text="Save"
              onPress={() => console.log('click')}
            />
          </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AppointmentDetailsScreen;
