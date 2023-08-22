import React, {useState, useEffect} from 'react';
import {View, Text, Modal} from 'react-native';
import {Controller} from 'react-hook-form';
import ProfileProviderFormStyles from '../styles/ProfileProviderFormStyles';
import Button from './Button';
import MessageModal from './MessageModal';
import MultipleLocationInput from './MultipleLocationInput';
import InputField from './InputField';
import useProfileForm from '../hooks/useCustomForm';
import {
  NAME_VALIDATION_RULES,
  PHONE_VALIDATION_RULES,
} from '../constants/ProfileClientFormConst';
import DescriptionInput from './DescriptionInput';

const ProfileProviderForm: React.FC = () => {
  const {control, handleSubmit, errors, onSubmit, isModalVisible, setValue} =
    useProfileForm();
  const [servicesDescription, setServicesDescription] = useState('');
  const [isLocationModalVisible, setLocationModalVisible] =
    useState<boolean>(false);

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
        render={({field: {onChange, value: nameValue}}) => (
          <InputField
            styleVariant="secondary"
            label="Name"
            placeholder="Enter your name"
            value={nameValue}
            onChangeText={value => onChange(value)}
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
        rules={NAME_VALIDATION_RULES}
        defaultValue=""
      />
      <Text style={ProfileProviderFormStyles.text}> Phone: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => {
          const handlePhoneChange = (text: string) => {
            let formattedText = text.replace(
              /(\d{3})(\d{3})(\d{4})/,
              '$1-$2-$3',
            );
            formattedText = formattedText.replace(/[^0-9-]/g, '');
            formattedText = formattedText.slice(0, 12);
            onChange(formattedText);
          };
          return (
            <InputField
              label="Phone"
              value={value}
              onChangeText={handlePhoneChange}
              placeholder="Enter your phone number"
              errorMessage={errors.phone?.message}
              keyboardType="numeric"
            />
          );
        }}
        name="phone"
        rules={PHONE_VALIDATION_RULES}
        defaultValue=""
      />
      <Text style={ProfileProviderFormStyles.text}> Addresses: </Text>
      <View style={ProfileProviderFormStyles.addressContainer}>
        <Button
          text="Select Service Locations"
          onPress={() => setLocationModalVisible(true)}
          styleName="welcome"
          textStyleName="welcome"
        />
      </View>
      <Text style={ProfileProviderFormStyles.text}> Occupation: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value: occupationValue}}) => (
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
        rules={{required: 'Occupation is required!'}}
        defaultValue=""
      />
      <View style={ProfileProviderFormStyles.descriptionContainer}>
        <Controller
          control={control}
          render={() => (
            <DescriptionInput
              value={servicesDescription}
              onChangeText={handleServicesDescriptionChange}
              placeholder="Describe your services, ej. monitoring and advice"
            />
          )}
          name="servicesDescription"
          defaultValue=""
        />
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
