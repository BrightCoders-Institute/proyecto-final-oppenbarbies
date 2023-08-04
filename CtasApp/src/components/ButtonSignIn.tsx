import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react';
import {BtnSignInStyles as styles} from '../styles/BtnSIgnInStyles';
import {SafeAreaView} from 'react-native-safe-area-context';


type btnSignInProps = {
  text: String;
  authProvider: "google" | "facebook";
  navigationFuncion: ()=>void;
}

type size={
  width: number;
  height: number;
}
export default function ButtonSignIn({text, authProvider, navigationFuncion}: btnSignInProps): JSX.Element {
  let urlImageIcon = (authProvider==='google')?require(`../img/logo_google.png`): require(`../img/logo_facebook.png`)
  let size: size = (authProvider==='google')?{width: 45, height:45}:{width: 30, height:30}
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btnSignIn} onPress={navigationFuncion}>
        <Image source={urlImageIcon} style={{width: size.width, height: size.height}}/>
        <Text style= {styles.btnText}>{text} {authProvider.charAt(0).toUpperCase() + authProvider.slice(1)}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
