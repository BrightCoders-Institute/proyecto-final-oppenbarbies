import * as React from 'react';
import {View, SafeAreaView, Image, ImageBackground} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import Navbar from '../components/Navbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserDetailsClient from '../components/UserDetailsClient';

const HomeClientScreen: React.FC = () => {
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
            source={require('../img/profilepick.png')}
          />
        </View>
        <UserDetailsClient
          name="John Doe"
          email="email@email.com"
          birth="18 Jun, 1991"
          phone="XXX-XXX-XXXX"
          location="Villa de Alvarez"
        />
      </SafeAreaView>
      <Navbar />
    </ImageBackground>
  );
};

export default HomeClientScreen;
