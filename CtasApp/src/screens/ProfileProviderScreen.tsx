import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileProviderForm from '../components/ProfileProviderForm';

const ProfileProviderScreen: React.FC = () => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <ProfileClientSimpleCard
        userType="Provider"
        userName="Jessica Amouranth"
        userEmail="jessica@example.com"
      />
      <ProfileProviderForm />
    </SafeAreaView>
  );
};

export default ProfileProviderScreen;
