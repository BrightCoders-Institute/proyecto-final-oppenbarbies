import * as React from 'react';
import {Provider} from '../schema/ProviderSchema';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetProvider} from '../database/Providers/GettersProvider';
import ProviderInformation from '../components/ProviderInformation';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import Map from '../components/Map';
import CalendarModal from '../components/CalendarModal';
import useCustomForm from '../hooks/useCustomForm';
import Button from '../components/Button';
import BackArrow from '../components/BackArrow';

type setCitaProps = {
  navigation: any;
  route: any;
};

const SetCitaScreen: React.FC<setCitaProps> = ({route, navigation}) => {
  const {item} = route.params;
  const {setValue} = useCustomForm();
  const [providerInfo, setProviderInfo] = React.useState<Provider | null>(null);
  const handleSetBirthdate = (date: string) => {
    setValue('birthDate', date);
  };
  React.useEffect(() => {
    const fetchProviderInfo = async () => {
      const info = await GetProvider(item.email);
      setProviderInfo(info);
    };

    fetchProviderInfo();
  }, [item.email]);

  return (
    <SafeAreaView style={ProviderSetCitaStyles.main}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View style={ProviderSetCitaStyles.main}>
          <BackArrow />
          <ProviderInformation
            image={item.image}
            name={item.name}
            location={item.address}
            description={item.description}
          />
          <View style={ProviderSetCitaStyles.body}>
            <Text style={ProviderSetCitaStyles.appointmentDetails}>
              Office Location
            </Text>
            <Map address={providerInfo ? providerInfo.address : []} />

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
