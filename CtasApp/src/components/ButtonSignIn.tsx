import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react';
import {BtnSignInStyles as styles} from '../styles/BtnSIgnInStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type btnSignInProps = {
  text: String;
  authProvider: "google" | "facebook";
}

export default function ButtonSignIn({text, authProvider}: btnSignInProps): JSX.Element {
  
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btnSignIn}>
        <FontAwesome name={authProvider} size={35} color="#0F67C6" />
        <Text style= {styles.btnText}>{text} {authProvider.charAt(0).toUpperCase() + authProvider.slice(1)}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
