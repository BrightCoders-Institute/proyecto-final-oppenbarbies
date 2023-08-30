import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileClientForm from '../components/ProfileClientForm';
import {SignInProps, SignInScreenParams} from '../schema/SignInScreenSchema';

const ProfileClientScreen: React.FC<SignInProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={ProfileClientScreenStyles.contentContainer}
        scrollEnabled={true}>
        <ProfileClientSimpleCard userType="Client" />
        <ProfileClientForm navigation={navigation}/>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfileClientScreen;
