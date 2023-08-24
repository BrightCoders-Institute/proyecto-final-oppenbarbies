import firestore from '@react-native-firebase/firestore';

export const existUser = async (
  email: String,
  collection: string,
): Promise<Boolean> => {
  return await firestore()
    .collection(collection)
    .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length > 0) return true;
      else return false;
    });
};
