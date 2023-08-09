import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileClientForm from '../components/ProfileClientForm';

const ProfileClientScreen: React.FC = () => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <ProfileClientSimpleCard />
      <ProfileClientForm />
    </SafeAreaView>
  );
};

export default ProfileClientScreen;
