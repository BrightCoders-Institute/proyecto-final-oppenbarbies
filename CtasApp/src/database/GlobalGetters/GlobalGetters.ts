import firestore from '@react-native-firebase/firestore';
import {useUserContext} from '../../../UserContext';

export const existUser = async (
  email: String | null,
  collection: string,
): Promise<Boolean> => {
  return await firestore()
    .collection(collection)
    .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        return true;
      } else {
        return false;
      }
    });
};

export const getUserID = async (
  email: string | null,
  collection: string,
): Promise<string | undefined> => {
  try {
    return await firestore()
      .collection(collection)
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          let id: string = querySnapshot.docs[0].id;
          return id;
        }

        if (querySnapshot.docs.length == 0) {
          return 'User NOT FOUND';
        }
      });
  } catch (error) {
    console.log('Error: ', error);
    return `Error: ${error}`;
  }
};
