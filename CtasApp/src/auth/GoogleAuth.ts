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

    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.signOut();
    }

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userCredential = await auth().signInWithCredential(googleCredential);
    return userCredential;
  } catch (error: any) {
    if (error.code === 'SIGN_IN_CANCELLED') {
      console.error('User cancelled the login flow');
    }
    console.error(error);
  
    return {error};
  }
};
