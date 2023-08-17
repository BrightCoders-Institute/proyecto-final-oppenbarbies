import * as React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';
import CalendarModal from '../components/CalendarModal';
import useCustomForm from '../hooks/useCustomForm';
import Button from '../components/Button';
import Colors from '../styles/colors/Colors';

const SetCitaScreen: React.FC = () => {
  const {setValue} = useCustomForm();
  const handleSetBirthdate = (date: string) => {
    setValue('birthDate', date);
  };
  return (
    <SafeAreaView style={ProviderSetCitaStyles.main}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={ProviderSetCitaStyles.main}>
          <View style={ProviderSetCitaStyles.backArrow}>
            <Ionicons name="arrow-back" size={20} color={Colors.white} />
          </View>
          <ProviderInformation
            name="Lic. Valeriano Perez"
            age={26}
            location="Villa de Alvarez, Col"
          />
          <View style={ProviderSetCitaStyles.body}>
            <Text style={ProviderSetCitaStyles.appointmentDetails}>
              Office Location
            </Text>
            <Map address="Laguna la coata #121 Colima, Villa de Álvarez, Col. Solidaridad " />
            <Text style={ProviderSetCitaStyles.appointmentDetails}>
              Set an appointment
            </Text>
            <View style={ProviderSetCitaStyles.calendarContainer}>
              <CalendarModal setBirthdate={handleSetBirthdate} />
            </View>
          </View>
          <View style={ProviderSetCitaStyles.button}>
            <Button
              text="Request Appointment"
              onPress={() => console.log('click')}
              styleName={'welcome'}
              textStyleName={'welcome'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SetCitaScreen;
