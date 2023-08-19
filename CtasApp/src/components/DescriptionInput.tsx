import React from 'react';
import {TextInput, Text, View} from 'react-native';
import ProfileProviderFormStyles from '../styles/ProfileProviderFormStyles';
import DescriptionInputStyles from '../styles/DescriptionInputStyles';  
import {DescriptionInputProps} from '../schema/DescriptionInputSchema'; 

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  value,
  onChangeText,
  placeholder,
  styleType = 'profile'  
}) => {

  const containerStyle = styleType === 'profile' ? ProfileProviderFormStyles.descriptionContainer : DescriptionInputStyles.descriptionContainer;
  const inputStyle = styleType === 'profile' ? ProfileProviderFormStyles.inputDescription : DescriptionInputStyles.inputDescription;
  const textCounterStyle = styleType === 'profile' ? ProfileProviderFormStyles.textCounter : DescriptionInputStyles.textCounter;

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        maxLength={86}
        multiline
      />
      <Text style={textCounterStyle}>
        {value.length} of 86 characters
      </Text>
    </View>
  );
};

export default DescriptionInput;
