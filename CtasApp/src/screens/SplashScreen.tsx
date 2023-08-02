import React, {useEffect} from 'react';
import {Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
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
        <Image
          source={require('../img/logoTemp.png')}
          style={SplashScreenStyles.logo}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SplashScreen;
