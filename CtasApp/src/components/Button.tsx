import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import { ButtonProps } from '../schema/ButtonSchema';

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={ProfileClientFormStyles.button} onPress={onPress}>
      <Text style={ProfileClientFormStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
