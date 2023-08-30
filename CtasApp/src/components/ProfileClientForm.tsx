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
import Colors from '../styles/colors/Colors';
import {
  NAME_VALIDATION_RULES,
  PHONE_VALIDATION_RULES,
} from '../constants/ProfileClientFormConst';

type ProfileClientFormProps = {
  navigation: any;
}

const ProfileClientForm: React.FC<ProfileClientFormProps> = ({navigation}) => {
  const {control, handleSubmit, errors, onSubmit, setValue, isModalVisible} =
    useCustomForm(navigation, 'client');
  const [isDateModalVisible, setDateModalVisible] = useState<boolean>(false);
  const [isLocationModalVisible, setLocationModalVisible] =
    useState<boolean>(false);

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
            onChangeText={onChange}
            placeholder="Enter your name"
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
        rules={NAME_VALIDATION_RULES}
        defaultValue=""
      />
      <Text style={ProfileClientFormStyles.text}> Phone: </Text>
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
      <Text style={ProfileClientFormStyles.text}> Birth Date: </Text>
      <Pressable
        onPress={() => setDateModalVisible(true)}
        style={ProfileClientFormStyles.textInputPress}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              label="BirthDate"
              value={value}
              onChangeText={onChange}
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
        onPress={() => setDateModalVisible(true)}>
        <AntDesign name="calendar" size={20} color={Colors.aqua} />
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
              onChangeText={onChange}
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
              errorMessage={errors.location?.message}
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
              onPress={() => setDateModalVisible(false)}
              styleName="default"
            />
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default ProfileClientForm;
