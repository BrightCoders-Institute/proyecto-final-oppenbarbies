import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {UserDetailsClientProps} from '../schema/UserDetailsClientSchema';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';

const UserDetailsClient: React.FC<UserDetailsClientProps> = ({
  name,
  email,
  birth,
  phone,
  location,
}) => {
  return (
    <SafeAreaView>
      <View style={HomeClientScreenStyles.detailsContainer}>
        <View style={HomeClientScreenStyles.nameContainer}>
          <Text style={HomeClientScreenStyles.name}>Hello!</Text>
          <Text style={HomeClientScreenStyles.name}>{name}</Text>
        </View>
        <Text style={HomeClientScreenStyles.details}>Email: {email}</Text>
        <Text style={HomeClientScreenStyles.details}>Birth: {birth}</Text>
        <Text style={HomeClientScreenStyles.details}>Phone: {phone}</Text>
        <Text style={HomeClientScreenStyles.details}>Location: {location}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsClient;
