import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import ProviderInfoList from '../components/ProviderInfoList';
import Navbar from '../components/Navbar';
import BodyStyles from '../styles/BodyStyles';
import Header from '../components/Header';
const SearchScreen: React.FC = () => {
  const [search,setSerach] = React.useState('');
  return (
    <SafeAreaView style={BodyStyles.container}>
      <Header title="What do you need?" />
      <View style={BodyStyles.bodyContainer}>
        <SearchInput search={search} setSearch={setSerach}/>
        <ProviderInfoList />
        <Navbar />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
