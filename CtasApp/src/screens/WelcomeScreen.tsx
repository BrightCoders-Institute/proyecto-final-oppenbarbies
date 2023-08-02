import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
type Props = {};

const WelcomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <View>
        <View>
          <Image source={require('../img/logo.png')} style={SplashScreenStyles.logo} />
          <Text>Welcome</Text>
        </View>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cum dolor praesentium possimus. Deserunt ipsam, voluptate, vel quaerat eos, molestias illum perspiciatis voluptatum ea adipisci necessitatibus molestiae! Optio, culpa minima.</Text>
      </View>
      <View>

      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
