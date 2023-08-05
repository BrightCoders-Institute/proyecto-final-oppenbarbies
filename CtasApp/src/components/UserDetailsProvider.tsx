import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import {UserDetailsProviderProps} from '../schema/UserDetailsProviderSchema';
import Ratting from './Ratting';

const UserDetailsProvider: React.FC<UserDetailsProviderProps> = ({
  name,
  email,
  birth,
  phone,
  adress,
  ocupation,
  services,
  ratting,
}) => {
  return (
    <SafeAreaView>
      <View style={HomeClientScreenStyles.detailsContainer}>
        <Ratting stars={ratting} />
        <View style={HomeClientScreenStyles.nameContainer}>
          <Text style={HomeClientScreenStyles.name}>Hello!</Text>
          <Text style={HomeClientScreenStyles.name}>{name}</Text>
        </View>
        <Text style={HomeClientScreenStyles.details}>Email: {email}</Text>
        <Text style={HomeClientScreenStyles.details}>Birth: {birth}</Text>
        <Text style={HomeClientScreenStyles.details}>Phone: {phone}</Text>
        <Text style={HomeClientScreenStyles.details}>Adress: {adress}</Text>
        <Text style={HomeClientScreenStyles.details}>
          Ocupation: {ocupation}
        </Text>
        <Text style={HomeClientScreenStyles.details}>Services: {services}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsProvider;
