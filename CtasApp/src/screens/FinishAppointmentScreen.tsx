import * as React from 'react';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Alert} from 'react-native';
import TimeSlotButton from '../components/TimeSlotButton';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';
import Button from '../components/Button';
import DescriptionInput from '../components/DescriptionInput';
import BackArrow from '../components/BackArrow';
import { CreateAppointmentSchema } from '../schema/CreateAppointmentSchema';
import { POSTNewProviderAppointment } from '../database/Providers/SettersProvider';
import { POSTNewAppointment } from '../database/GlobalGetters/GlobalSetters';
import { useUserContext } from '../../UserContext';

const timeSlots = [
  '5:00 AM',
  '6:00 AM',
  '7:00 AM',
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
  '11:00 PM',
];

const FinishAppointmentScreen: React.FC = ({route, navigation}) => {
  const {date, address, client, provider, providerEmail} = route.params;
  const {sessionData} = useUserContext();
  const [description, setDescription] = useState<string>('');
  const [selectedHour, setSelectedHour] = React.useState<string>('');

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };


  const POSTAppointment = async () => {
    const newAppointment : CreateAppointmentSchema = {
      date: date,
      time: selectedHour,
      address: address,
      description: description,
      client,
      provider
    }
    try {
      await POSTNewAppointment(providerEmail, newAppointment, 'Providers');
      await POSTNewAppointment(sessionData.userEmail, newAppointment, 'Clients');
      Alert.alert('Successfully', 'Your appoinment was created Successfully!.');
      navigation.navigate('MyAppointments');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something was wrong!'); 
    }
  }

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
          <Text style={FinishAppointmentScreenStyles.labels}>Select Time</Text>
          <TimeSlotButton slots={timeSlots} selectedHour={selectedHour} setSelectedHour={setSelectedHour}/>
          <DescriptionInput
            value={description}
            placeholder="Add an optional description..."
            onChangeText={handleDescriptionChange}
            styleType="description"
          />
          <View style={FinishAppointmentScreenStyles.button}>
            <Button
              text="Finish Appointment"
              onPress={POSTAppointment}
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
