import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import Logo from '../components/Logo';
import {StackActions} from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Welcome'));
    }, 4000);

    return () => clearTimeout(timeoutId);
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
