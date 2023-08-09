import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {FormData} from '../schema/ProfileClientFormSchema';

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

        setValue('name', '');
        setValue('phone', '');
        setValue('birthDate', '');
        setValue('location', '');
      }, 3000);
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
