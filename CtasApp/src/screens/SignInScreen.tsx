import * as React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInStyles as styles} from '../styles/SignInStyle';
import ButtonSignIn from '../components/ButtonSignIn';
import {SignInProps} from '../schema/SignInScreenSchema';
import {GoogleAuth} from '../auth/GoogleAuth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useUserContext} from '../../UserContext';
import {existUser, getUserID} from '../database/GlobalGetters/GlobalGetters';
import {handleLogOut} from '../auth/LogOut';


const SignInScreen: React.FC<SignInProps> = ({navigation}) => {
  const {userType, setSessionData} = useUserContext();

  const setSession = async (
    email: string | null,
    collection: string,
  ): Promise<void> => {
    setSessionData({
      userID: await getUserID(email, collection),
      userEmail: email,
    });
  };

  const goHomeProfile = async () => {
    try {
      let user: FirebaseAuthTypes.UserCredential | {error: unknown} = await GoogleAuth();
      if ('error' in user) {
        console.error('Error', user.error);
        return;
      }

      const prevUserType = userType; 
      let collection: string;
      if (userType === 'client') {
        collection = 'Clients';
      } else {
        collection = 'Providers';
      }
  
      const exist = await existUser(user.user.email, collection);
  
      if (exist) {
        await setSession(user.user.email, collection);
      } else {
        if (prevUserType !== userType) {
          handleLogOut();
        }
      }
      if (userType === 'client') {
        exist ? navigation.navigate('HomeClient') : navigation.navigate('ProfileClient');
      } else {
        exist ? navigation.navigate('HomeClient') : navigation.navigate('ProfileProvider');
      }
    } catch (error) {
      console.error('Error during the login process:', error);
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
