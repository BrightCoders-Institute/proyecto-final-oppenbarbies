import * as React from 'react';
import {Image} from 'react-native';
import {LogoProps, StyleType, ImageKeys} from '../schema/LogoSchema';
import LogoStyles from '../styles/LogoStyles';

const images: Record<ImageKeys, any> = {
  logo: require('../img/logo.png'),
  logowithoutbackground: require('../img/logowithoutbackground.png'),
};

const Logo: React.FC<LogoProps> = props => {
  const src = (props.src || 'logo') as ImageKeys;
  const styleType = (props.styleType || 'logo') as StyleType;
  const imageSrc = images[src];

  const styleMapping: {[key in StyleType]: typeof LogoStyles.logo} = {
    logo: LogoStyles.logo,
    logowb: LogoStyles.logowb,
    logoBanner: LogoStyles.logoBanner,
  };

  const style = styleMapping[styleType];

  return <Image source={imageSrc} style={style} />;
};

export default Logo;
