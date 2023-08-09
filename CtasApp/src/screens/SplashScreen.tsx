import React, {useEffect} from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import Logo from '../components/Logo';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 4000);
  }, [navigation]);
  return (
    <ImageBackground
      source={require('../img/Splash.png')}
      style={SplashScreenStyles.container}>
      <SafeAreaView style={SplashScreenStyles.logoContainer}>
        <Logo />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SplashScreen;
