import * as React from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {SearchInputProps} from '../schema/SearchInputSchema';
import {SearchStyles} from '../styles/SearchStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchInput: React.FC<SearchInputProps> = ({search, setSearch}) => {
  return (
    <View style={SearchStyles.inputContainer}>
      <TextInput
        style={SearchStyles.textInput}
        placeholder="Doctor, Lawyer..."
        value={search}
        onChangeText={setSearch}
      />
      <Pressable>
        <FontAwesome name="search" size={25} style={SearchStyles.icon} />
      </Pressable>
    </View>
  );
};

export default SearchInput;
