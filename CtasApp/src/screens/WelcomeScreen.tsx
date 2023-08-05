import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
import Button from '../components/Button';
import Logo from '../components/Logo';

type Props = {};

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  
  const goToSignIn= (userType: String)=>{
    navigation.navigate('SignIn',{
      userType: userType
    });
  }

  return (
    <SafeAreaView style={SplashScreenStyles.container}>
      <View style={WelcomeStyles.headerContainer}>
        <View style={WelcomeStyles.logoTitle}>
          <Logo src="logowithoutbackground" styleType="logowb" />
          <Text style={WelcomeStyles.title}>Welcome</Text>
        </View>
        <Text style={WelcomeStyles.description}>
          C-Tas is a mobile app focused on time management, linking clients and
          providers. It simplifies scheduling to enable seamless organization.
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
              onPress={()=>goToSignIn('client')}
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
              onPress={() => goToSignIn('service provider')}
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
