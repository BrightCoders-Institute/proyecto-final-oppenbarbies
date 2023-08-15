import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: Config.WEB_CLIENT,
  offlineAccess: true,
});

export const GoogleAuth = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userCredential = await auth().signInWithCredential(googleCredential);
    console.log('Successful login:', userCredential.user);
    return userCredential;
  } catch (error) {
    console.error('Error:', error);
    return {error};
  }
};

