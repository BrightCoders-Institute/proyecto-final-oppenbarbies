import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, TextInput, Pressable} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <View style={SearchStyles.inputContainer}>
          <TextInput
            style={SearchStyles.textInput}
            placeholder="Doctor, Lawyer..."></TextInput>
            <Pressable>
              <FontAwesome name="search" size={25} style={SearchStyles.icon}/>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
