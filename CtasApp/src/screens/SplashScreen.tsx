import React, {useEffect} from 'react';
import { SafeAreaView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import Logo from '../components/Logo';
type Props = {};

const SplashScreen: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 4000);
  }, []);
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
