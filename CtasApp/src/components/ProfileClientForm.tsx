import React, {useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import {Controller} from 'react-hook-form';
import useCustomForm from '../hooks/useCustomForm';
import InputField from './InputField';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from './Button';
import LocationInput from './LocationInput';
import MessageModal from './MessageModal';
import CalendarModal from './CalendarModal';

const ProfileClientForm: React.FC = () => {
  const {control, handleSubmit, errors, onSubmit, setValue, isModalVisible} =
    useCustomForm();
  const [birthdate, setBirthdate] = useState('');
  const [isDateModalVisible, setDateModalVisible] = useState<boolean>(false);
  const [isLocationModalVisible, setLocationModalVisible] =
    useState<boolean>(false);

  const handleDateModalOpen = () => {
    setDateModalVisible(true);
  };
  const handleDateModalClose = () => {
    setDateModalVisible(false);
  };

  const handleSetBirthdate = (date: string) => {
    setValue('birthDate', date);
  };

  return (
    <View style={ProfileClientFormStyles.container}>
      <Text style={ProfileClientFormStyles.titleText}>
        Complete your profile
      </Text>
      <View style={ProfileClientFormStyles.info}>
        <Text style={ProfileClientFormStyles.text}> Name: </Text>
        <Text style={ProfileClientFormStyles.infoText}>
          This name is visible to all app users.
        </Text>
      </View>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            label="Name"
            value={value}
            onChangeText={value => {
              if (errors.name) {
                setValue('name', '');
              }
              onChange(value);
            }}
            placeholder="Enter your name"
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
            value={value}
            onChangeText={value => {
              if (errors.phone) {
                setValue('phone', '');
              }
              onChange(value);
            }}
            placeholder="Enter your phone number"
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
      <Text style={ProfileClientFormStyles.text}> Birth Date: </Text>
      <Pressable
        onPress={handleDateModalOpen}
        style={ProfileClientFormStyles.textInputPress}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              label="BirthDate"
              value={value || birthdate}
              onChangeText={value => onChange(value)}
              placeholder="Enter your Birth Date"
              errorMessage={errors.birthDate?.message}
              editable={false}
            />
          )}
          name="birthDate"
          rules={{required: 'Birth Date is required!'}}
          defaultValue=""
        />
      </Pressable>
      <Pressable
        style={ProfileClientFormStyles.iconPress}
        onPress={handleDateModalOpen}>
        <AntDesign name="calendar" size={20} color="#40B9A9" />
      </Pressable>
      <Text style={ProfileClientFormStyles.text}> Location: </Text>
      <Pressable
        onPress={() => setLocationModalVisible(true)}
        style={ProfileClientFormStyles.textInputPress}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              label="Location"
              value={value}
              onChangeText={item => onChange(item)}
              placeholder="Enter your location"
              editable={false}
            />
          )}
          name="location"
          rules={{required: 'Location is required!'}}
          defaultValue=""
        />
      </Pressable>
      {isLocationModalVisible ? (
        <Modal animationType="slide" transparent={true}>
          <View style={ProfileClientFormStyles.modalContainer}>
            <LocationInput
              onSelected={item => {
                setLocationModalVisible(false);
                setValue('location', item);
              }}
              errorMessage={errors.location?.message} // Passing the error message here
            />
            <Button
              text="Close"
              onPress={() => setLocationModalVisible(false)}
              styleName="default"
            />
          </View>
        </Modal>
      ) : null}
      <View style={ProfileClientFormStyles.buttonContainer}>
        <Button text="Save" onPress={handleSubmit(onSubmit)} />
      </View>
      <MessageModal
        isVisible={isModalVisible}
        animationKey="loading"
        title="Saving..."
        message="Please wait while we save your profile data."
      />
      {isDateModalVisible ? (
        <Modal animationType="slide" transparent={true}>
          <View style={ProfileClientFormStyles.modalContainer}>
            <CalendarModal setBirthdate={handleSetBirthdate} />
            <Button
              text="Close"
              onPress={handleDateModalClose}
              styleName="default"
            />
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default ProfileClientForm;
