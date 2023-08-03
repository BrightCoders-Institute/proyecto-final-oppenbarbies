import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
type Props = {};

const WelcomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <View style={WelcomeStyles.welcomeContainer}>
        <View style={WelcomeStyles.logoTitle}>
          <Image
            source={require('../img/logo.png')}
            style={SplashScreenStyles.logo}
          />
          <Text style={WelcomeStyles.title}>Welcome</Text>
        </View>
        <Text style={WelcomeStyles.description}>
        App description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>
      </View>
      <View style={WelcomeStyles.profilesContainer}>
        <View>
          <View>
            <Pressable>
              <Text>Client</Text>
            </Pressable>
          </View>
          <View>

          </View>
        </View>
        <View>
          <Text>If you don't have an account</Text>
          <Pressable><Text>Sign up</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
