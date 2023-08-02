import React from 'react';
import {View, Text} from 'react-native';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';

type Props = {};

const ProfileClientScreen: React.FC<Props> = () => {
  return (
    <View style={ProfileClientScreenStyles.container}>
        <ProfileClientSimpleCard/>
    </View>
  );
};

export default ProfileClientScreen;
