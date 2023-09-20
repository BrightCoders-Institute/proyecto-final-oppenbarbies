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
    if (!provider) {
      throw new Error('User NOT FOUND');
    }
    return provider.unavailableDays;
  } catch (error) {
    console.log('Error', error);
  }
};
type Rating = {
  rating: number;
};
export const GetTotalRating = async (providerEmail: string): Promise<void> => {
  try {
    const providerRef = firestore()
      .collection('Providers')
      .where('email', '==', providerEmail);
    const querySnapshot = await providerRef.get();

    if (!querySnapshot.empty) {
      querySnapshot.forEach(documentSnapshot => {
        const providerData = documentSnapshot.data();
        let ratingsArray: Rating[] = providerData.rating || [];

        if (ratingsArray.length > 0) {
          const totalRating =
            ratingsArray.reduce((sum, r) => sum + r.rating, 0) /
            ratingsArray.length;
          documentSnapshot.ref.update({totalRating});
        }
      });
    }
  } catch (error) {
    console.error('Error getting total rating: ', error);
  }
};

export const GetUnavailableTimes = async (
  email: string | null,
): Promise<Array<string> | undefined> => {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    const querySnapshot = await firestore()
      .collection('Providers')
      .where('email', '==', email)
      .get();

    let provider: Provider | undefined =
      querySnapshot.docs[0]?.data() as Provider;
    if (!provider) {
      throw new Error('Provider NOT FOUND');
    }
    return provider.availableTimes ? provider.availableTimes : [];
  } catch (error) {
    console.error('Error getting unavailable times: ', error);
  }
};
