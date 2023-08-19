import * as React from 'react';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import TimeSlotButton from '../components/TimeSlotButton';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';
import CalendarModal from '../components/CalendarModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../styles/colors/Colors';
import Button from '../components/Button';
import DescriptionInput from '../components/DescriptionInput';
import BackArrow from '../components/BackArrow';

const timeSlots = [
  '12:00 AM',
  '12:30 AM',
  '1:00 AM',
  '1:30 AM',
  '2:00 AM',
  '2:30 AM',
  '3:00 AM',
  '3:30 AM',
  '4:00 AM',
  '4:30 AM',
  '5:00 AM',
  '5:30 AM',
  '6:00 AM',
  '6:30 AM',
];

const FinishAppointmentScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState<string>('');

  const handleDateChange = (date: Date) => {
    setDate(date);
    console.log(date);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    console.log(text);
  };

  return (
    <SafeAreaView style={FinishAppointmentScreenStyles.background}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={FinishAppointmentScreenStyles.header}>
          <BackArrow />
          <Text style={FinishAppointmentScreenStyles.title}>
            Finish your appointment
          </Text>
        </View>
        <View style={FinishAppointmentScreenStyles.container}>
          <Text style={FinishAppointmentScreenStyles.labels}>
            Select a date
          </Text>
          <View style={FinishAppointmentScreenStyles.calendarContainer}>
            <CalendarModal setBirthdate={Date} />
          </View>
          <Text style={FinishAppointmentScreenStyles.labels}>Select Time</Text>
          <TimeSlotButton slots={timeSlots} />
          <DescriptionInput
            value={description}
            placeholder="Add an optional description..."
            onChangeText={handleDescriptionChange}
            styleType="description"
          />
          <View style={FinishAppointmentScreenStyles.button}>
            <Button
              text="Finish Appointment"
              onPress={() => console.log('click')}
              styleName="welcome"
              textStyleName="Big"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FinishAppointmentScreen;
