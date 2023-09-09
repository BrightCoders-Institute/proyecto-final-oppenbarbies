import * as React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Map from '../components/Map';
import CalendarModal from '../components/CalendarModal';
import useCustomForm from '../hooks/useCustomForm';
import Button from '../components/Button';
import BackArrow from '../components/BackArrow';

type setCitaProps = {
  navigation: any,
  route: any,
};

const SetCitaScreen: React.FC<setCitaProps> = ({route, navigation}) => {
  const {item} = route.params;
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
          <BackArrow />
          <ProviderInformation
            occupation= {item.occupation}
            image={item.image}
            name={item.name}
            location={item.location}
            description={item.description}
          />
          <View style={ProviderSetCitaStyles.body}>
            <Text style={ProviderSetCitaStyles.appointmentDetails}>
              Office Location
            </Text>
            <Map address={item.address[0]} />
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
