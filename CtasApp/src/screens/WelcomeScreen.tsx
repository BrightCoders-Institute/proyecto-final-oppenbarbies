import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
import {ButtonProps, ButtonPropsWithTextStyle} from '../schema/ButtonSchema';
import Button from '../components/Button';
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
          C-Tas is a mobile app for appointment management, connecting
          professionals with clients for streamlined organization and
          communication.
        </Text>
      </View>
      <View style={WelcomeStyles.bodyContainer}>
        <View style={WelcomeStyles.profilesContainer}>
          <View style={WelcomeStyles.profile}>
            <Image
              source={require('../img/Client.png')}
              style={WelcomeStyles.profileLogo}
            />
            <Button
              text="Client"
              onPress={() => {}}
              styleName={'welcome'}
              textStyleName={'welcome'}
            />
          </View>
          <View style={WelcomeStyles.profile}>
            <Image
              source={require('../img/Provider.png')}
              style={WelcomeStyles.profileLogo}
            />
            <Button
              text="Service Provider"
              onPress={() => {}}
              styleName={'welcome'}
              textStyleName={'welcome'}
            />
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
