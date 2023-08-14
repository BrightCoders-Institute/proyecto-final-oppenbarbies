import * as React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
import Logo from '../components/Logo';
import ProfileSelector from '../components/ProfileSelector';
import {WelcomeScreenProps} from '../schema/SignInScreenSchema';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const goToSignIn = (userType: string) => {
    navigation.navigate('SignIn', {
      userType: userType,
    });
  };

  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <View style={WelcomeStyles.headerContainer}>
        <View style={WelcomeStyles.logoTitle}>
          <Logo src="logoWithoutBackground" styleType="logoWb" />
          <Text style={WelcomeStyles.title}>Welcome</Text>
        </View>
        <Text style={WelcomeStyles.description}>
          C-Tas is a mobile app focused on time management, linking clients and
          providers. It simplifies scheduling to enable seamless organization.
        </Text>
      </View>
      <View style={WelcomeStyles.bodyContainer}>
        <View style={WelcomeStyles.profilesContainer}>
          <ProfileSelector
            source={require('../img/Client.png')}
            text="Client"
            onPress={() => goToSignIn('client')}
          />
          <ProfileSelector
            source={require('../img/Provider.png')}
            text="Service Provider"
            onPress={() => goToSignIn('service provider')}
          />
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
