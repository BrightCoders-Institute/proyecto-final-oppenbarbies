import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import Navbar from '../components/Navbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserDetailsClient from '../components/UserDetailsClient';

const HomeClientScreen: React.FC = () => {
  return (
    <SafeAreaView style={HomeClientScreenStyles.body}>
      <View style={HomeClientScreenStyles.photoContainer}>
        <FontAwesome
          style={HomeClientScreenStyles.gear}
          name="gear"
          size={25}
        />
        <Image
          style={HomeClientScreenStyles.photo}
          source={require('../assets/profilepick.png')}
        />
      </View>
      <UserDetailsClient {...userDetails} />
      <Navbar />
    </SafeAreaView>
  );
};

export default HomeClientScreen;
