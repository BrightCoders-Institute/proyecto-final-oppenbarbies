import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import {ButtonPropsWithTextStyle} from '../schema/ButtonSchema';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import WelcomeStyles from '../styles/WelcomeStyles';

const Button: React.FC<ButtonPropsWithTextStyle> = ({
  text,
  onPress,
  styleName = 'default',
  textStyleName = 'default',
}) => {
  const selectedStyle: ViewStyle =
    styleName === 'welcome'
      ? WelcomeStyles.button
      : ProfileClientFormStyles.button;

  const selectedTextStyle: TextStyle =
    textStyleName === 'welcome'
      ? WelcomeStyles.buttonText
      : ProfileClientFormStyles.buttonText;

  return ( 
    <TouchableOpacity style={selectedStyle} onPress={onPress}>
      <Text style={selectedTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
