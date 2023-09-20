import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {FormData} from '../schema/ProfileClientFormSchema';
import {Client} from '../schema/ClientSchema';
import {FirebaseAuthTypes, firebase} from '@react-native-firebase/auth';
import {SignUpClient} from '../database/Clients/SettersClients';
import {UserType} from '../schema/SignInScreenSchema';
import {Provider} from '../schema/ProviderSchema';
import {SignUpProvider} from '../database/Providers/SettersProvider';
import moment from 'moment';

const useProfileForm = (navigation: any, userType: UserType) => {
  const {control, handleSubmit, formState, setValue, reset} =
    useForm<FormData>();
  const {errors} = formState;
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const calculateAge = (birthDate: string): number => {
    const parsedBirthDate = moment(birthDate, 'D MMM, YYYY'); // Usa moment para parsear la fecha
    if (!parsedBirthDate.isValid()) {
      console.error('Fecha de nacimiento no válida:', birthDate);
      return 0;
    }

    const today = moment();
    let age = today.year() - parsedBirthDate.year();
    const m = today.month() - parsedBirthDate.month();

    if (m < 0 || (m === 0 && today.date() < parsedBirthDate.date())) {
      age--;
    }

    return age;
  };

  const SubmitClient = async (user: FirebaseAuthTypes.User, data: FormData) => {
    let userData: Client = {
      age: calculateAge(data.birthDate),
      alias: data.name,
      appointments: [],
      birthday: data.birthDate,
      email: user.email,
      image: user.photoURL,
      location: data.location,
      name: user.displayName,
      phone: data.phone,
      userType: 'client',
    };

    if (await SignUpClient(userData)) {
      navigation.navigate('HomeClient');
    }
  };

  const SubmitProvider = async (
    user: FirebaseAuthTypes.User,
    data: FormData,
  ) => {
    let userData: Provider = {
      email: user.email,
      name: user.displayName,
      alias: data.name,
      phone: data.phone,
      occupation: data.occupation,
      description: data.servicesDescription,
      address: data.address,
      scoreList: [],
      rating: 0,
      image: user.photoURL,
      userType: 'provider',
      appointments: [],
    };

    if (await SignUpProvider(userData)) {
      navigation.navigate('HomeClient');
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      let user = firebase.auth().currentUser;
      if (user) {
        if (userType === 'client') {
          await SubmitClient(user, data);
        }
        if (userType === 'provider') {
          await SubmitProvider(user, data);
        }

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
      } else {
        console.error('User is not logged in');
      }
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
