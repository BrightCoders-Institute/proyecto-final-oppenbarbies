import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import {UserDetailsProviderProps} from '../schema/UserDetailsProviderSchema';
import Rating from './Rating';

const UserDetailsProvider: React.FC<UserDetailsProviderProps> = ({
  name,
  email,
  birth,
  phone,
  address,
  occupation,
  services,
  ratting,
}) => {
  return (
    <SafeAreaView>
      <View style={HomeClientScreenStyles.detailsContainer}>
        <Rating stars={ratting} />
        <View style={HomeClientScreenStyles.nameContainer}>
          <Text style={HomeClientScreenStyles.name}>Hello!</Text>
          <Text style={HomeClientScreenStyles.name}>{name}</Text>
        </View>
        <Text style={HomeClientScreenStyles.details}>Email: {email}</Text>
        <Text style={HomeClientScreenStyles.details}>Birth: {birth}</Text>
        <Text style={HomeClientScreenStyles.details}>Phone: {phone}</Text>
        <Text style={HomeClientScreenStyles.details}>Address: {address}</Text>
        <Text style={HomeClientScreenStyles.details}>
          Occupation: {occupation}
        </Text>
        <Text style={HomeClientScreenStyles.details}>Services: {services}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsProvider;
