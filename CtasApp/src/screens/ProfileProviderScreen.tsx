import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileProviderForm from '../components/ProfileProviderForm';
import {SignInProps} from '../schema/SignInScreenSchema';

const ProfileProviderScreen: React.FC<SignInProps> = ({navigate, route}) => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={ProfileClientScreenStyles.contentContainer}
        scrollEnabled={true}>
        <ProfileClientSimpleCard userType="Provider" />
        <ProfileProviderForm />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ProfileProviderScreen;
