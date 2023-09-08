import firestore from '@react-native-firebase/firestore';
import {Provider} from '../../schema/ProviderSchema';
import {useUserContext} from '../../../UserContext';

export const GetProvider = async (email: string): Promise<Provider | null> => {
  let provider: Provider | null = null;

  console.log(`Starting retrieval for client with email: ${email}`);

  try {
    const querySnapshot = await firestore()
      .collection('Providers')
      .where('email', '==', email)
      .get();

    console.log('Query Snapshot: ', querySnapshot);

    querySnapshot.forEach(documentSnapshot => {
      provider = documentSnapshot.data() as Provider;
      console.log('Client ID: ', documentSnapshot.id);
    });

    if (!provider) {
      console.log('Client not found!');
      return null;
    }
  } catch (error) {
    console.log('Error getting client: ', error);
  }

  return provider;
};

export const GetUnavailableDays = async (
  email: string | null,
): Promise<Array<string> | undefined> => {
  try {
    const querySnapshot = await firestore()
      .collection('Providers')
      .where('email', '==', email)
      .get();

    let provider: Provider = querySnapshot.docs[0].data() as Provider;
    if(!provider){
      throw new Error("User NOT FOUND");
    }
    return provider.unavailableDays;
  } catch (error) {
    console.log('Error', error);
  }
};
