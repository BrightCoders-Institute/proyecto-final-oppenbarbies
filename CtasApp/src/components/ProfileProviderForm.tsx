import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, Pressable } from 'react-native';
import { Controller } from 'react-hook-form';
import ProfileProviderFormStyles from '../styles/ProfileProviderFormStyles';
import Button from './Button';
import MessageModal from './MessageModal';
import MultipleLocationInput from './MultipleLocationInput';
import InputField from './InputField';
import useProfileForm from '../hooks/useCustomForm';

const NAME_VALIDATION_RULES = {
  required: 'Name is required!',
  pattern: {
    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
    message: 'Name can only contain letters and spaces!',
  },
};

const PHONE_VALIDATION_RULES = {
  required: 'Phone number is required!',
  pattern: {
    value: /^\d{10}$/,
    message: 'Phone number must be 10 digits!',
  },
};

const ProfileProviderForm: React.FC = () => {
  const { control, handleSubmit, errors, onSubmit, isModalVisible, setValue } = useProfileForm();
  const [servicesDescription, setServicesDescription] = useState('');
  const [isLocationModalVisible, setLocationModalVisible] = useState<boolean>(false);

  const handleServicesDescriptionChange = (text: string) => {
    setServicesDescription(text);
    setValue('servicesDescription', text);
  };

  useEffect(() => {
    if (!isModalVisible) {
      setServicesDescription('');
    }
  }, [isModalVisible]);

  return (
    <View style={ProfileProviderFormStyles.container}>
      <Text style={ProfileProviderFormStyles.titleText}>
        Complete your profile
      </Text>
      <Text style={ProfileProviderFormStyles.text}> Name: </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value: nameValue } }) => (
          <InputField
            styleVariant="secondary"
            label="Name"
            placeholder="Enter your name"
            value={nameValue}
            onChangeText={value => onChange(value)}
            errorMessage={errors.name?.message}
            keyboardType="numeric"
          />
        )}
        name="name"
        rules={NAME_VALIDATION_RULES}
        defaultValue=""
      />
      <Text style={ProfileProviderFormStyles.text}> Phone: </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value: phoneValue } }) => (
          <InputField
            styleVariant="secondary"
            label="Phone"
            placeholder="Enter your phone number"
            value={phoneValue}
            onChangeText={value => onChange(value)}
            errorMessage={errors.phone?.message}
          />
        )}
        name="phone"
        rules={PHONE_VALIDATION_RULES}
        defaultValue=""
      />
      <Text style={ProfileProviderFormStyles.text}> Addresses: </Text>
      <Pressable
        onPress={() => setLocationModalVisible(true)}
        style={ProfileProviderFormStyles.textInputPress}>
        <Text style={ProfileProviderFormStyles.modalText}>
          Select Multiple Locations of your services
        </Text>
      </Pressable>
      <Text style={ProfileProviderFormStyles.text}> Occupation: </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value: occupationValue } }) => (
          <InputField
            styleVariant="secondary"
            label="Occupation"
            placeholder="Enter your occupation"
            value={occupationValue}
            onChangeText={value => onChange(value)}
            errorMessage={errors.occupation?.message}
          />
        )}
        name="occupation"
        rules={{ required: 'Occupation is required!' }}
        defaultValue=""
      />
      <View style={ProfileProviderFormStyles.descriptionContainer}>
        <Controller
          control={control}
          render={() => (
            <TextInput
              style={ProfileProviderFormStyles.inputDescription}
              value={servicesDescription}
              onChangeText={handleServicesDescriptionChange}
              placeholder="Describe your services, ej. monitoring and advice"
              maxLength={86}
              multiline
            />
          )}
          name="servicesDescription"
          defaultValue=""
        />
        <Text style={ProfileProviderFormStyles.textCounter}>
          {servicesDescription.length} of 86 characters
        </Text>
      </View>
      <View style={ProfileProviderFormStyles.buttonContainer}>
        <Button text="Save" onPress={handleSubmit(onSubmit)} />
      </View>
      <MessageModal
        isVisible={isModalVisible}
        animationKey="loading"
        title="Saving..."
        message="Please wait while we save your profile data."
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLocationModalVisible}>
        <View style={ProfileProviderFormStyles.modalContainer}>
          <MultipleLocationInput
            onSelected={item => {
              setValue('address', item);
            }}
            errorMessage={errors.address?.message}
          />
          <Button
            text="Close"
            onPress={() => setLocationModalVisible(false)}
            styleName="default"
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProfileProviderForm;
