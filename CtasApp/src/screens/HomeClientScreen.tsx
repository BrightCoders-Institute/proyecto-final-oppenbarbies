import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, Image, ImageBackground, Alert} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import Navbar from '../components/Navbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserDetailsClient from '../components/UserDetailsClient';
import {GetClient} from '../database/Clients/GettersClients';
import {GETCurrentUserEmail} from '../auth/CurrentUser';
import {Provider} from '../schema/ProviderSchema';
import {Client} from '../schema/ClientSchema';
import {GetProvider} from '../database/Providers/GettersProvider';
import {truncateString} from '../helpers/TruncateStringHelper';
import UserDetailsProvider from '../components/UserDetailsProvider';

type HomeClientScreenProps = {
  route: {
    params: {
      userType: string;
    };
  };
};

const HomeClientScreen: React.FC<HomeClientScreenProps> = ({route}) => {
  const [user, setUser] = useState<Client | Provider | null>(null);
  const userType = route.params.userType;

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUserEmail = GETCurrentUserEmail();

      if (!currentUserEmail) {
        Alert.alert('Error', 'No se pudo obtener el usuario actual');
        return;
      }

      if (userType === 'client') {
        const clientData = await GetClient(currentUserEmail);
        setUser(clientData);
      } else if (userType === 'provider') {
        const providerData = await GetProvider(currentUserEmail);
        setUser(providerData);
      }
    };
    fetchUserData();
  }, [userType]);

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
            source={
              user?.image
                ? {uri: user?.image}
                : require('../img/profilepick.png')
            }
          />
        </View>
        {user && userType === 'client' ? (
          <UserDetailsClient
            name={truncateString(user?.alias, 16)}
            email={user?.email}
            birth={user?.birthday}
            phone={user?.phone}
            location={user?.location}
          />
        ) : user && userType === 'provider' ? (
          <UserDetailsProvider
            name={truncateString(user?.alias, 16)}
            email={user?.email}
            phone={user?.phone}
            address={truncateString(user?.address, 41)}
            occupation={user?.occupation}
            servicesDescription={user?.description}
          />
        ) : null}
      </SafeAreaView>
      <Navbar />
    </ImageBackground>
  );
};

export default HomeClientScreen;
