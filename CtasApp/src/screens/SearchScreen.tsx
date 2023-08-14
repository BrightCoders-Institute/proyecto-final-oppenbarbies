import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import SearchInput from '../components/SearchInput';
import ProviderInfoList from '../components/ProviderInfoList';
import Navbar from '../components/Navbar';

const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <SearchInput />
        <ProviderInfoList />
      </View>
      <Navbar />
    </SafeAreaView>
  );
};
export default SearchScreen;
