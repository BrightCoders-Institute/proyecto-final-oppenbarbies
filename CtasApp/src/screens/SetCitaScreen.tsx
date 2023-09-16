import * as React from 'react';
import {Provider} from '../schema/ProviderSchema';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetProvider} from '../database/Providers/GettersProvider';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Map from '../components/Map';
import Button from '../components/Button';
import BackArrow from '../components/BackArrow';
import {truncateStringTwo} from '../helpers/TruncateStringTwoHelper';
import {GetUnavailableDays} from '../database/Providers/GettersProvider';
import ClientCalendar from '../components/ClientCalendar';
import { Client } from '../schema/ClientSchema';
import { GetClient } from '../database/Clients/GettersClients';
import { useUserContext } from '../../UserContext';

type setCitaProps = {
  navigation: any;
  route: any;
};

const SetCitaScreen: React.FC<setCitaProps> = ({route, navigation}) => {
  const {item} = route.params;
  const {sessionData} = useUserContext();
  const [providerInfo, setProviderInfo] = React.useState<Provider | null>(null);
  const [clientInfo, setClientInfo] = React.useState<Client | null>(null);
  const [selectedDay, setSelectedDay] = React.useState<string>('');
  
  const [unavailableDays, setUnavailableDays] = React.useState<
    Array<string> | undefined
  >(undefined);
  React.useEffect(() => {
    const fetchProviderInfoAndUnavailableDays = async () => {
      const info = await GetProvider(item.email);
      setProviderInfo(info);

      const unavailableDaysFromFirebase = await GetUnavailableDays(item.email);
      const formattedUnavailableDays = unavailableDaysFromFirebase?.map(date =>
        date.replace(/-/g, '/'),
      );
      setUnavailableDays(formattedUnavailableDays);
    };

    const fetchClientInfo = async () => {
      const info = await GetClient(sessionData.userEmail);
      setClientInfo(info);
    }

    fetchProviderInfoAndUnavailableDays();
    fetchClientInfo();
  }, [item.email]);

  return (
    <SafeAreaView style={ProviderSetCitaStyles.main}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={ProviderSetCitaStyles.main}>
          <BackArrow />

          <ProviderInformation
            occupation={item.occupation}
            image={item.image}
            name={truncateStringTwo(item.name, 17)}
            description={item.description}
            email={item.email}
          />
        </View>
        <View style={ProviderSetCitaStyles.body}>
          <Text style={ProviderSetCitaStyles.appointmentDetails}>
            Office Location
          </Text>
          <Map
            address={
              providerInfo && providerInfo.address ? providerInfo.address : []
            }
          />
          <Text style={ProviderSetCitaStyles.appointmentDetails}>
            Set an appointment
          </Text>
          <View style={ProviderSetCitaStyles.calendarContainer}>
            <ClientCalendar email={item.email} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            <Text style={ProviderSetCitaStyles.appointmentDetails}>
              Red marked days are unavailable
            </Text>
          </View>
        </View>
        <View style={ProviderSetCitaStyles.button}>
          <Button
            text="Request Appointment"
            onPress={() => navigation.navigate('FinishAppointment',{
              date: selectedDay,
              address: providerInfo?.address,
              client:{
                alias: clientInfo?.alias,
                age: clientInfo?.age,
                image: clientInfo?.image
              },
              provider: {
                alias: providerInfo?.alias,
                occupation: providerInfo?.occupation,
                image: providerInfo?.image
              },
              providerEmail: providerInfo?.email
            })}
            styleName={'welcome'}
            textStyleName={'welcome'}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SetCitaScreen;
