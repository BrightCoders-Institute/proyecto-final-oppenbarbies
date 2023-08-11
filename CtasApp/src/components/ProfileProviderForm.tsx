import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Modal, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
import ProfileProviderFormStyles from '../styles/ProfileProviderFormStyles';
import Button from './Button';
import MessageModal from './MessageModal';
import MultipleLocationInput from './MultipleLocationInput';
import InputField from './InputField';
import useProfileForm from '../hooks/useCustomForm';

const ProfileProviderForm: React.FC = () => {
  const {control, handleSubmit, errors, onSubmit, isModalVisible, setValue} =
    useProfileForm();
  const [servicesDescription, setServicesDescription] = useState('');
  const [isLocationModalVisible, setLocationModalVisible] =
    useState<boolean>(false);
  const [isCharacterLimitReached, setCharacterLimitReached] = useState(false);

  const handleServicesDescriptionChange = (text: string) => {
    if (text.length <= 86) {
      setServicesDescription(text);
      setValue('servicesDescription', text);
      setCharacterLimitReached(false);
    } else {
      setCharacterLimitReached(true);
    }
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
        render={({field: {onChange, value}}) => (
          <InputField
            styleVariant="secondary"
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
      <Text style={ProfileProviderFormStyles.text}> Phone: </Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            styleVariant="secondary"
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
        render={({field: {onChange, value}}) => (
          <InputField
            styleVariant="secondary"
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

      <View style={ProfileProviderFormStyles.descriptionContainer}>
        {isCharacterLimitReached && (
          <Text style={ProfileProviderFormStyles.characterLimitWarning}>
            You have reached the character limit.
          </Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={ProfileProviderFormStyles.inputDescription}
              value={servicesDescription}
              onChangeText={text => {
                handleServicesDescriptionChange(text);
              }}
              placeholder="Describe your services, ej. monitoring and advice"
              multiline
            />
          )}
          name="servicesDescription"
          rules={{required: 'Services Description is required!'}}
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
