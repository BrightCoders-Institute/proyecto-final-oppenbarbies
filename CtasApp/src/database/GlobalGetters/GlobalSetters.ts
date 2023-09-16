import firestore from '@react-native-firebase/firestore';
import { CreateAppointmentSchema } from "../../schema/CreateAppointmentSchema";

export const POSTNewAppointment = async (email: string, appointment: CreateAppointmentSchema, collection: string) : Promise<void>=> {
    try {
      const querySnapshot = await firestore()
        .collection(collection)
        .where('email', '==', email)
        .get();
      if (!querySnapshot.empty) {
        querySnapshot.forEach(documentSnapshot => {
          const docRef = firestore()
            .collection(collection)
            .doc(documentSnapshot.id);
          docRef.update({
            appointments:  firestore.FieldValue.arrayUnion(appointment)
          })
        });
        console.log('Appointment created SUCCESSFULLY in: ',collection);
      } else {
        console.log('Provider NOT FOUND');
      }
    } catch (error) {
      console.log('Error creating appointment: ', error);
    }
  }