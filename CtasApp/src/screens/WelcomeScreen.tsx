import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
type Props = {};

const WelcomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <View style={WelcomeStyles.headerContainer}>
        <View style={WelcomeStyles.logoTitle}>
          <Image
            source={require('../img/logo.png')}
            style={SplashScreenStyles.logo}
          />
          <Text style={WelcomeStyles.title}>Welcome</Text>
        </View>
        <Text style={WelcomeStyles.description}>
          App description - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
        </Text>
      </View>
      <View style={WelcomeStyles.bodyContainer}>
        <View style={WelcomeStyles.profilesContainer}>
          <View style={WelcomeStyles.profile}>
            <Image source={require('../img/Client.png')} style={WelcomeStyles.profileLogo} />
            <Pressable style={WelcomeStyles.button}>
              <Text style={WelcomeStyles.buttonText}>Client</Text>
            </Pressable>
          </View>
          <View style={WelcomeStyles.profile}>
            <Image source={require('../img/Provider.png')} style={WelcomeStyles.profileLogo} />
            <Pressable style={WelcomeStyles.button}>
              <Text style={WelcomeStyles.buttonText}>Service Provider</Text>
            </Pressable>
          </View>
        </View>
        <View style={WelcomeStyles.footerContainer}>
          <Text style={WelcomeStyles.footerText}>
            If you don't have an account
          </Text>
          <Pressable>
            <Text style={WelcomeStyles.footerLink}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
