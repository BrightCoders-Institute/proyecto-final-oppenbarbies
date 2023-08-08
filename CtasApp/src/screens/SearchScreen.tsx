import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import SearchInput from '../components/SearchInput';
import ProviderInfoCard from '../components/ProviderInfoCard';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <SearchInput />
        <ProviderInfoCard
          name="Lic. Valeriano Perez"
          age={26}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, velit fuga hic modi quam."
          location="Colima"
          ocupation="Lawyer"
        />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
