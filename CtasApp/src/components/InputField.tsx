import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import {InputFieldProps} from '../schema/ProfileClientFormSchema';

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={InputFieldStyles.container}>
      <TextInput
        style={InputFieldStyles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;