import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import Button from './Button';
import MessageModal from './MessageModal';
import MultipleLocationInput from './MultipleLocationInput';
import InputField from './InputField';
import useProfileForm from '../hooks/useCustomForm';

const ProfileProviderForm: React.FC = () => {
  const {control, handleSubmit, errors, onSubmit, isModalVisible, setValue} =
    useProfileForm();
  const [servicesDescription, setServicesDescription] = useState('');

  return (
    <View style={ProfileClientFormStyles.container}>
      <Text style={ProfileClientFormStyles.titleText}>
        Complete your profile
      </Text>
      <Text style={ProfileClientFormStyles.text}> Name: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={value}
            onChangeText={value => onChange(value)}
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
        rules={{
          required: 'Name is required!',
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Name can only contain letters and spaces!',
          },
        }}
        defaultValue=""
      />
      <Text style={ProfileClientFormStyles.text}> Phone: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            label="Phone"
            placeholder="Enter your phone number"
            value={value}
            onChangeText={value => onChange(value)}
            errorMessage={errors.phone?.message}
          />
        )}
        name="phone"
        rules={{
          required: 'Phone number is required!',
          pattern: {
            value: /^\d{10}$/,
            message: 'Phone number must be 10 digits!',
          },
        }}
        defaultValue=""
      />
      <Text style={ProfileClientFormStyles.text}> Addresses: </Text>
      <MultipleLocationInput
        onSelected={item => {
          setValue('address', item);
        }}
        errorMessage={errors.address?.message}
      />
      <Text style={ProfileClientFormStyles.text}> Occupation: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            label="Occupation"
            placeholder="Enter your occupation"
            value={value}
            onChangeText={value => onChange(value)}
            errorMessage={errors.occupation?.message}
          />
        )}
        name="occupation"
        rules={{required: 'Occupation is required!'}}
        defaultValue=""
      />

      <View>
        <TextInput
          style={ProfileClientFormStyles.input}
          value={servicesDescription}
          onChangeText={text => {
            if (text.length <= 45) {
              setServicesDescription(text);
            }
          }}
          placeholder="Describe your services, ej. monitoring and advice"
        />
        <Text style={ProfileClientFormStyles.textCounter}>
          {servicesDescription.length} of 45 characters
        </Text>
      </View>

      <View style={ProfileClientFormStyles.buttonContainer}>
        <Button text="Save" onPress={handleSubmit(onSubmit)} />
      </View>

      <MessageModal
        isVisible={isModalVisible}
        animationKey="loading"
        title="Saving..."
        message="Please wait while we save your profile data."
      />
    </View>
  );
};

export default ProfileProviderForm;
