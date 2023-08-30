import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, Image, ImageBackground, Alert} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import Navbar from '../components/Navbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserDetailsClient from '../components/UserDetailsClient';
import {GetClient} from '../database/Clients/GettersClients';
import {GETCurrentUserEmail} from '../auth/CurrentUser';
import {Client} from '../schema/ClientSchema';
import {truncateString} from '../helpers/TruncateStringHelper';

const HomeClientScreen: React.FC = () => {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const fetchClientData = async () => {
      const currentClientEmail = GETCurrentUserEmail();

      if (!currentClientEmail) {
        Alert.alert('Error', 'No se pudo obtener el usuario actual');
        return;
      }
      const clientData = await GetClient(currentClientEmail);
      setClient(clientData);
    };
    fetchClientData();
  }, []);
  return (
    <ImageBackground
      source={require('../img/homeClientBackGround.png')}
      style={HomeClientScreenStyles.background}
      resizeMode="stretch">
      <SafeAreaView style={HomeClientScreenStyles.body}>
        <View style={HomeClientScreenStyles.photoContainer}>
          <FontAwesome
            style={HomeClientScreenStyles.gear}
            name="gear"
            size={25}
          />
          <Image
            style={HomeClientScreenStyles.photo}
            source={client?.image ? {uri: client?.image} : require('../img/profilepick.png')}
          />
        </View>
        <UserDetailsClient
          name={truncateString(client?.alias, 16)}
          email={client?.email}
          birth={client?.birthday}
          phone={client?.phone}
          location={client?.location}
        />
      </SafeAreaView>
      <Navbar />
    </ImageBackground>
  );
};

export default HomeClientScreen;
