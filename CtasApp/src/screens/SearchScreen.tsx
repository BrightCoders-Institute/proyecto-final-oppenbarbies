import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { SearchStyles } from '../styles/SearchStyles';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <Text>test</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
