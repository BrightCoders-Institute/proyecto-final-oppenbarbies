import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import {ButtonPropsWithTextStyle} from '../schema/ButtonSchema';
import ProfileClientFormStyles from '../styles/ProfileClientFormStyles';
import WelcomeStyles from '../styles/WelcomeStyles';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';

const Button: React.FC<ButtonPropsWithTextStyle> = ({
  text,
  onPress,
  styleName = 'default',
  textStyleName = 'default',
}) => {
  let selectedStyle: ViewStyle;
  let selectedTextStyle: TextStyle;

  switch(styleName) {
    case 'welcome':
      selectedStyle = WelcomeStyles.button;
      break;
      case 'Big':
        selectedStyle = FinishAppointmentScreenStyles.buttonF;
        break;
    default:
      selectedStyle = ProfileClientFormStyles.button;
  }

  switch(textStyleName) {
    case 'welcome':
      selectedTextStyle = WelcomeStyles.buttonText;
      break;
    case 'Big':
      selectedTextStyle = FinishAppointmentScreenStyles.buttonText;
      break;
      case 'slots':
        selectedTextStyle = FinishAppointmentScreenStyles.buttonTextSlots;
        break;
    default:
      selectedTextStyle = ProfileClientFormStyles.buttonText; 
  }
      

  return (
    <TouchableOpacity style={selectedStyle} onPress={onPress}>
      <Text style={selectedTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
