import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {FormData} from '../schema/ProfileClientFormSchema';
import { set } from 'date-fns';

const useProfileForm = () => {
  const {control, handleSubmit, formState, setValue} = useForm<FormData>();
  const {errors} = formState;
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      setValue('name', '');
      setValue('phone', '');
      setValue('birthDate', '');
      setValue('location', '');
      setValue('occupation', '');
      setValue('servicesDescription', '');
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
