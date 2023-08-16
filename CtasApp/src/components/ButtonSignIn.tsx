import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {btnSignInProps, size as sizeType} from '../schema/ButtonSignInSchema';
import {BtnSignInStyles as styles} from '../styles/BtnSIgnInStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const ButtonSignIn: React.FC<btnSignInProps> = ({
  text,
  authProvider,
  navigationFunction,
}) => {
  const urlImageIcon =
    authProvider === 'google'
      ? require('../img/logo_google.png')
      : require('../img/logo_facebook.png');

  const size: sizeType =
    authProvider === 'google'
      ? {width: 45, height: 45}
      : {width: 30, height: 30};

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btnSignIn} onPress={navigationFunction}>
        <Image
          source={urlImageIcon}
          style={{width: size.width, height: size.height}}
        />
        <Text style={styles.btnText}>
          {text} {authProvider.charAt(0).toUpperCase() + authProvider.slice(1)}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ButtonSignIn;
