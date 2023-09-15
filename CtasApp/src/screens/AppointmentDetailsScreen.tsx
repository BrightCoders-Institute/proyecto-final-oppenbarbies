import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView, Alert} from 'react-native'; // Importamos Alert
import AppointmentDetailsStyles from '../styles/AppointmentDetailsStyles';
import {View, Text} from 'react-native';
import AvailableTimePicker from '../components/AvailableTimePicker';
import CustomCalendar from '../components/CustomCalendar';
import AddressPicker from '../components/AddressPicker';
import Button from '../components/Button';
import BackArrow from '../components/BackArrow';
import {useNavigation} from '@react-navigation/native';

const AppointmentDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleSavePress = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you wish to save?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Save',
          onPress: () => {
            navigation.navigate('HomeClient');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={AppointmentDetailsStyles.background}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={AppointmentDetailsStyles.header}>
          <BackArrow />
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
            <View style={AppointmentDetailsStyles.button}>
              <Button text="Save" onPress={handleSavePress} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AppointmentDetailsScreen;
