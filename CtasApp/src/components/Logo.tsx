import * as React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {LogoProps, StyleType, ImageKeys} from '../schema/LogoSchema';
import LogoStyles from '../styles/LogoStyles';

const images: Record<ImageKeys, ImageSourcePropType> = {
  logo: require('../img/logo.png'),
  logoWithoutBackground: require('../img/logowithoutbackground.png'),
};

const styleMapping: Record<StyleType, typeof LogoStyles.logo> = {
  logo: LogoStyles.logo,
  logoWb: LogoStyles.logoWb,
  logoBanner: LogoStyles.logoBanner,
};

const Logo: React.FC<LogoProps> = ({src = 'logo', styleType = 'logo'}) => {
  return (
    <View style={LogoStyles.logoContainer}>
      <Image
        source={images[src as ImageKeys]}
        style={styleMapping[styleType as StyleType]}
      />
    </View>
  );
};

export default Logo;
