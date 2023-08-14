import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {FormData} from '../schema/ProfileClientFormSchema';

const useProfileForm = () => {
  const {control, handleSubmit, formState, setValue, reset} =
    useForm<FormData>();
  const {errors} = formState;
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
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
