import * as React from 'react';
import {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Alert} from 'react-native';
import TimeSlotButton from '../components/TimeSlotButton';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';
import Button from '../components/Button';
import DescriptionInput from '../components/DescriptionInput';
import BackArrow from '../components/BackArrow';
import {CreateAppointmentSchema} from '../schema/CreateAppointmentSchema';
import {POSTNewProviderAppointment} from '../database/Providers/SettersProvider';
import {POSTNewAppointment} from '../database/GlobalGetters/GlobalSetters';
import {useUserContext} from '../../UserContext';
import {GetUnavailableTimes} from '../database/Providers/GettersProvider';
import {is} from 'date-fns/locale';
import {removeSelectedTimeFromFirebase} from '../database/Providers/SettersProvider';
import {GETCurrentUserEmail} from '../auth/CurrentUser';

const FinishAppointmentScreen: React.FC = ({route, navigation}) => {
  const {
    date,
    address,
    client: clientData,
    provider,
    providerEmail,
  } = route.params;
  const {sessionData} = useUserContext();
  const [description, setDescription] = useState<string>('');
  const [selectedHour, setSelectedHour] = React.useState<string>('');
  const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const userEmail = GETCurrentUserEmail();
  const client = {
    ...clientData,
    ...sessionData,
    alias: clientData.alias || sessionData.alias || 'Alias no proporcionado',
    age: clientData.age || sessionData.age || 0,
    image: clientData.image || sessionData.image || 'URL de imagen no proporcionada',
  };
  
  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  useEffect(() => {
    const fetchUnavailableTimes = async () => {
      try {
        setLoading(true);
        const times = await GetUnavailableTimes(providerEmail);
        setUnavailableTimes(times || []);
      } catch (error) {
        console.error('Error fetching unavailable times: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUnavailableTimes();
  }, [providerEmail]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const POSTAppointment = async () => {
    const newAppointment: CreateAppointmentSchema = {
      date: date,
      time: selectedHour,
      address: address,
      description: description,
      client,
      provider,
    };
    try {
      console.log({
        date,
        selectedHour,
        address,
        description,
        client,
        provider,
      });
      console.log('Client Email: ', sessionData.userEmail);
      console.log('Provider Email: ', providerEmail);

      await POSTNewAppointment(providerEmail, newAppointment, 'Providers');
      await POSTNewAppointment(userEmail, newAppointment, 'Clients');
      Alert.alert('Successfully', 'Your appointment was created successfully!');
      await removeSelectedTimeFromFirebase(providerEmail, selectedHour, date);
      navigation.navigate('MyAppointments');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  const confirmAppointment = () => {
    if (selectedHour === '') {
      Alert.alert(
        'Error',
        'You must select a time slot before confirming the appointment.',
      );
      return; 
    }
  
    Alert.alert(
      'Confirm Appointment',
      `Do you really want to book your appointment for ${selectedHour}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => POSTAppointment()},
      ],
    );
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
          <Text style={FinishAppointmentScreenStyles.labels}>Select Time</Text>
          <TimeSlotButton
            slots={unavailableTimes}
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
            email={providerEmail}
            isTimeSlotDisabled={false}
          />

          <DescriptionInput
            value={description}
            placeholder="Add an optional description..."
            onChangeText={handleDescriptionChange}
            styleType="description"
          />
          <View style={FinishAppointmentScreenStyles.button}>
            <Button
              text="Finish Appointment"
              onPress={confirmAppointment}
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
