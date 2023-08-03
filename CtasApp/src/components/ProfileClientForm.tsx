import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import InputField from './InputField';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from './Button';

const ProfileClientForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [location, setLocation] = useState<string>('');

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
      <InputField
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={ProfileClientFormStyles.text}> Phone: </Text>
      <InputField
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
      />
      <Text style={ProfileClientFormStyles.text}> Birth Date: </Text>
      <InputField
        label="BirthDate"
        value={birthDate}
        onChangeText={setBirthDate}
        placeholder="Enter your Birth Date"
      />
      <AntDesign
        name="calendar"
        size={20}
        color="#40B9A9"
        style={ProfileClientFormStyles.calendarIcon}
      />
      <Text style={ProfileClientFormStyles.text}> Location: </Text>
      <InputField
        label="Location"
        value={location}
        onChangeText={setLocation}
        placeholder="Enter your location"
      />
      <View style={ProfileClientFormStyles.buttonContainer}>
        <Button text="Save" onPress={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </View>
    </View>
  );
};

export default ProfileClientForm;
