import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {FormData} from '../schema/ProfileClientFormSchema';
import { Client } from '../schema/ClientSchema';
import { firebase } from '@react-native-firebase/auth';
import { SignUpClient } from '../database/Clients/SettersClients';

const useProfileForm = () => {
  const {control, handleSubmit, formState, setValue, reset} =
    useForm<FormData>();
  const {errors} = formState;
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    try {
      let user = firebase.auth().currentUser;
      
      let userData : Client = {
        age: 0,
        alias: data.name,
        appointments: [],
        birthday: data.birthDate,
        email: user?.email,
        image: user?.photoURL,
        location: data.location,
        name: user?.displayName,
        phone: data.phone,
        userType: 'client'
      } 
      // console.log(data);
      // console.log(userData);
      await SignUpClient(userData);
      
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      reset({
        name: '',
        phone: '',
        birthDate: '',
        location: '',
        occupation: '',
        servicesDescription: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isModalVisible,
    setModalVisible,
    setValue,
  };
};

export default useProfileForm;
