import firestore from '@react-native-firebase/firestore';
import {Client} from '../../schema/ClientSchema';
import {CreateAppointmentSchema} from '../../schema/CreateAppointmentSchema';

export const SignUpClient = async (userData: Client) => {
  return await firestore()
    .collection('Clients')
    .add(userData)
    .then(() => {
      console.log('INFORMATION SAVED SUCCESSFULLY');
      return true;
    });
};
