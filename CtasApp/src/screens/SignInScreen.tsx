import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInStyles as styles} from '../styles/SignInStyle';
import ButtonSignIn from '../components/ButtonSignIn';

type Props = {};

const SignInScreen: React.FC<Props> = ({navigation, route}) => {
  const {userType} = route.params;
  const goHomeProfile= ()=>{
    if(userType == "client")
      navigation.navigate("ProfileClient");
    else
      navigation.navigate("ProfileProvider");

  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>WHAT DO YOU WANT TO DO?</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnGoogleContainer}>
          <ButtonSignIn text={'Sign In with'} authProvider="google" navigationFuncion={goHomeProfile}/>
        </View>
        <View style={styles.btnFacebookContainer}>
          <ButtonSignIn text={'Sign In with'} authProvider="facebook" navigationFuncion={goHomeProfile}/>
        </View>
      </View>
      <Text style={styles.txtNote}>
        <Text style={styles.txtBold}>NOTE:</Text>
        <Text > If you don't have an account </Text>
        <Text style={styles.txtBold}>don't worry!</Text>
        <Text>, the sign up is automatic.</Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignInScreen;
