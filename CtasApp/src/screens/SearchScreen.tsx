import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, TextInput, Pressable} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../components/SearchInput';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <SearchInput/>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
