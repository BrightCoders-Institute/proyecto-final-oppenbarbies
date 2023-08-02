import React from 'react';
import { SafeAreaView} from 'react-native';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileClientForm from '../components/ProfileClientForm';

type Props = {};

const ProfileClientScreen: React.FC<Props> = () => {
  return (
    < SafeAreaView style={ProfileClientScreenStyles.container}>
      <ProfileClientSimpleCard />
      <ProfileClientForm />
    </ SafeAreaView>
  );
};

export default ProfileClientScreen;
