import firestore from '@react-native-firebase/firestore';
import {useUserContext} from '../../../UserContext';
import { CreateAppointmentSchema } from '../../schema/CreateAppointmentSchema';
import { Client } from '../../schema/ClientSchema';
import { ProviderContext } from 'react-native-maps/lib/decorateMapComponent';
import { Provider } from '../../schema/ProviderSchema';

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

export const fetchAppointments = async (email: string, collection: string) : Promise<CreateAppointmentSchema[] | undefined>=> {
  let appointments: CreateAppointmentSchema[] | undefined = [];
  let client : Client; 
  let provider : Provider;

  try {
    const userRef = await firestore()
      .collection(collection)
      .where('email', '==', email);

   const querySnapshot = await userRef.get();
      if (!querySnapshot.empty) {
        if(collection == "Clients"){
          client = querySnapshot.docs[0].data() as Client;
          appointments = client.appointments;
        }
        if(collection == "Providers"){
          provider = querySnapshot.docs[0].data() as Provider;
          appointments = provider.appointments;
        }
      }
      console.log("Appointments: ", appointments);
      
      return appointments;
  } catch (error) {
    console.log('Error', error);    
      }
};

export const deleteAppointment = async (email: string, collection: string, appointmentToDelete: CreateAppointmentSchema): Promise<void> => {
  try {
    const userRef = await firestore()
      .collection(collection)
      .where('email', '==', email);

    const querySnapshot = await userRef.get();
    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref;
      const appointments = querySnapshot.docs[0].data().appointments as CreateAppointmentSchema[];
      const updatedAppointments = appointments.filter(appointment => 
        appointment.date !== appointmentToDelete.date ||
        appointment.time !== appointmentToDelete.time ||
        appointment.client.alias !== appointmentToDelete.client.alias ||
        appointment.provider.alias !== appointmentToDelete.provider.alias
      );

      await docRef.update({appointments: updatedAppointments});
    }
  } catch (error) {
    console.log('Error', error); 
  }
};

