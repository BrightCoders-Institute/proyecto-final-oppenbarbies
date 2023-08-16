import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileClientScreenStyles from '../styles/ProfileClientScreenStyles';
import ProfileClientSimpleCard from '../components/ProfileClientSimpleCard';
import ProfileClientForm from '../components/ProfileClientForm';
import auth from '@react-native-firebase/auth';


const ProfileClientScreen: React.FC = ({navigation, route}) => {
  const user = auth().currentUser;
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={ProfileClientScreenStyles.contentContainer}
        scrollEnabled={true}>
        <ProfileClientSimpleCard userType={userType} userName={displayName} userEmail={email}/>
        <ProfileClientForm />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfileClientScreen;
