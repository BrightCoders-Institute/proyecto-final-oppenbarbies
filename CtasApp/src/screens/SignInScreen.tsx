import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInStyles as styles } from '../styles/SignInStyle';
import ButtonSignIn from '../components/ButtonSignIn';
import { SignInProps } from '../schema/SignInScreenSchema';
import { GoogleAuth } from '../auth/GoogleAuth';
import { parse } from 'date-fns';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { existUser } from '../database/Clients/GettersClients';

const SignInScreen: React.FC<SignInProps> = ({ navigation, route }) => {
  const {userType} = route.params;
  
  const goHomeProfile = async () => {
    // Sign In with google and get user information
    let user: FirebaseAuthTypes.UserCredential = await GoogleAuth();
    
    // validate if the user is already signed up
    let exist: Boolean = await existUser(user.user.email);
    
    // navigate to the screen according to the userType.
    // If the user is already signed up, navigate to the Home Screen
    // If the user is not signed up, so navigate to the form to complete his profile information.
    if (userType == "client") {
      (exist) ?
        navigation.navigate('HomeClient')
        : navigation.navigate('ProfileClient');
    } else {
      (exist)?
        console.log('GO TO HOME PROVIDER')
      : navigation.navigate('ProfileProvider')
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>WHAT DO YOU WANT TO DO?</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnGoogleContainer}>
          <ButtonSignIn
            text={'Sign In with'}
            authProvider="google"
            navigationFunction={goHomeProfile}
          />
        </View>
        <View style={styles.btnFacebookContainer}>
          <ButtonSignIn
            text={'Sign In with'}
            authProvider="facebook"
            navigationFunction={goHomeProfile}
          />
        </View>
      </View>
      <Text style={styles.txtNote}>
        <Text style={styles.txtBold}>NOTE:</Text>
        <Text> If you don't have an account </Text>
        <Text style={styles.txtBold}>don't worry!</Text>
        <Text>, the sign up is automatic.</Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignInScreen;
