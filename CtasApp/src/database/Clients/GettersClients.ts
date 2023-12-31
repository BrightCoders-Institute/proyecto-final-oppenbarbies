import firestore from '@react-native-firebase/firestore';
import {Client} from '../../schema/ClientSchema';
import {useUserContext} from '../../../UserContext';

export const GetClient = async (email: string): Promise<Client | null> => {
  let client: Client | null = null;

  console.log(`Starting retrieval for client with email: ${email}`);

  try {
    const querySnapshot = await firestore()
      .collection('Clients')
      .where('email', '==', email)
      .get();

    querySnapshot.forEach(documentSnapshot => {
      client = documentSnapshot.data() as Client;
      console.log('Client ID: ', documentSnapshot.id);
    });

    if (!client) {
      console.log('Client not found!');
      return null;
    }
  } catch (error) {
    console.log('Error getting client: ', error);
  }

  return client;
};
