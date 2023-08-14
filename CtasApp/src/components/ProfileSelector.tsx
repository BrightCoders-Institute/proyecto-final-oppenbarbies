import React from 'react';
import {View, Image} from 'react-native';
import Button from './Button';
import WelcomeStyles from '../styles/WelcomeStyles';
import {ProfileSelectorProps} from '../schema/ProfileSelectorSchema';

const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  source,
  text,
  onPress,
}) => (
  <View style={WelcomeStyles.profile}>
    <Image source={source} style={WelcomeStyles.profileLogo} />
    <Button
      text={text}
      onPress={onPress}
      styleName={'welcome'}
      textStyleName={'welcome'}
    />
  </View>
);

export default ProfileSelector;
