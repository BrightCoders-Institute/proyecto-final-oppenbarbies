import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import MultipleLocationInput from '../components/MultipleLocationInput';


const ProfileProviderScreen: React.FC = () => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <ProfileClientSimpleCard />
      <MultipleLocationInput />
    </SafeAreaView>
  );
};

export default ProfileProviderScreen;
