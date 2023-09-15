import React, { useState, useEffect } from 'react';
import handleLogOut from '../auth/LogOut';
import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Alert,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import Navbar from '../components/Navbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserDetailsClient from '../components/UserDetailsClient';
import { GetClient } from '../database/Clients/GettersClients';
import { GETCurrentUserEmail } from '../auth/CurrentUser';
import { Provider } from '../schema/ProviderSchema';
import { Client } from '../schema/ClientSchema';
import { GetProvider } from '../database/Providers/GettersProvider';
import { truncateString } from '../helpers/TruncateStringHelper';
import UserDetailsProvider from '../components/UserDetailsProvider';
import { useUserContext } from '../../UserContext';

const UserDetails = React.memo(({ user }) => {
  const { userType, sessionData } = useUserContext();

  if (user && userType === 'client') {
    return (
      <UserDetailsClient
        name={truncateString(user?.alias, 16)}
        email={user?.email}
        birth={user?.birthday}
        phone={user?.phone}
        location={user?.location}
        
      />
    );
  } else if (user && userType === 'provider') {
    return (
      <UserDetailsProvider
        name={truncateString(user?.alias, 16)}
        email={user?.email}
        phone={user?.phone}
        address={truncateString(user?.address, 41)}
        occupation={user?.occupation}
        servicesDescription={user?.description}
        rate={user?.totalRating}
      />
    );
  } else {
    return null;
  }
});

const HomeClientScreen: React.FC = ({ navigation }) => {
  const { userType } = useUserContext();
  const [user, setUser] = useState<Client | Provider | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUserEmail = GETCurrentUserEmail();

      if (!currentUserEmail) {
        Alert.alert('Error', 'No se pudo obtener el usuario actual');
        navigation.navigate('Welcome'); 
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

  const handleLogoutPress = async () => {
    await handleLogOut();
    setIsMenuVisible(false);
    setUser(null);  
    navigation.navigate('Welcome'); 
  };

  return (
    <ImageBackground
      source={require('../img/homeClientBackGround.png')}
      style={HomeClientScreenStyles.background}
      resizeMode="stretch">
      <SafeAreaView style={HomeClientScreenStyles.body}>
        <View style={HomeClientScreenStyles.photoContainer}>
          <Pressable onPress={() => setIsMenuVisible(prev => !prev)}>
            <FontAwesome
              style={HomeClientScreenStyles.gear}
              name="gear"
              size={30}
            />
          </Pressable>
          <Image
            style={HomeClientScreenStyles.photo}
            source={
              user?.image
                ? { uri: user?.image }
                : require('../img/profilepick.png')
            }
          />
        </View>
        {isMenuVisible && (
          <View style={{ position: 'absolute', top: 55, right: 87, backgroundColor: 'white', borderRadius: 5, zIndex: 1000 , borderColor: 'gray', borderWidth: 2,}}>
            <TouchableOpacity onPress={handleLogoutPress} style={{ padding: 10 }}>
              <Text style ={{color: 'red'}}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsMenuVisible(false)} style={{ padding: 10 }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
        <UserDetails user={user} />
      </SafeAreaView>
      <Navbar />
    </ImageBackground>
  );
};

export default HomeClientScreen;
