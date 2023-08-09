import React from 'react';
import {View, TextInput, Text} from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import {InputFieldProps} from '../schema/ProfileClientFormSchema';

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  secureTextEntry,
  errorMessage,
  editable,
}) => {
  return (
    <View style={InputFieldStyles.container}>
      <TextInput
        style={InputFieldStyles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
      {errorMessage && (
        <Text style={InputFieldStyles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputField;
