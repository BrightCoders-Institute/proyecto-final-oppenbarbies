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
  styleVariant = 'default',
}) => {
  const styles = InputFieldStyles[styleVariant];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default InputField;
