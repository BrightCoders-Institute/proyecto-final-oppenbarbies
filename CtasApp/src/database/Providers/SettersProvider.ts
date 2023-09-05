import firestore from '@react-native-firebase/firestore';
import {Provider} from '../../schema/ProviderSchema';

export const SignUpProvider = async (userData: Provider) => {
  return await firestore()
    .collection('Providers')
    .add(userData)
    .then(() => {
      console.log('INFORMATION SAVED SUCCESSFULLY');
      return true;
    });
};
