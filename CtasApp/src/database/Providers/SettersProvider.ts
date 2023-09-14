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

export const PostUnavailableDays = async (
  email: string,
  days: Array<string>,
) => {
  // Funcion para guardar los dias inhabiles en firebase
  try {
    const querySnapshot = await firestore()
      .collection('Providers')
      .where('email', '==', email)
      .get();
    if (!querySnapshot.empty) {
      querySnapshot.forEach(documentSnapshot => {
        const docRef = firestore()
          .collection('Providers')
          .doc(documentSnapshot.id);
        days.forEach(day => {
          docRef.update({
            unavailableDays: firestore.FieldValue.arrayUnion(day),
          });
        });
      });
      console.log('Unavailbale days update SUCCESSFULLY');
    } else {
      console.log('Provider NOT FOUND');
    }
  } catch (error) {
    console.log('Error updating unavailable days: ', error);
  }
};

export const PostAvailableTimes = async (
  email: string,
  times: Array<string>,
) => {
  try {
    const querySnapshot = await firestore()
      .collection('Providers')
      .where('email', '==', email)
      .get();

    if (!querySnapshot.empty) {
      querySnapshot.forEach(documentSnapshot => {
        const docRef = firestore()
          .collection('Providers')
          .doc(documentSnapshot.id);

        docRef.update({
          availableTimes: firestore.FieldValue.arrayUnion(...times),
        });

        console.log('Available times updated successfully');
      });
    } else {
      console.log('Provider not found');
    }
  } catch (error) {
    console.error('Error updating available times: ', error);
  }
};
