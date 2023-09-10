import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import ProviderInfoList from '../components/ProviderInfoList';
import Navbar from '../components/Navbar';
import BodyStyles from '../styles/BodyStyles';
import Header from '../components/Header';
import {Provider} from '../schema/ProviderSchema';
import firestore from '@react-native-firebase/firestore';
import {useUserContext} from '../../UserContext';
import {SearchScreenProps} from '../schema/SearchInputSchema';

type ProviderWithKey = Provider & {key: string};

const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  const [search, setSerach] = useState('');
  const [providers, setProviders] = useState<ProviderWithKey[]>([]);
  const {userType} = useUserContext();
  const [filteredProviders, setFilteredProviders] = useState<ProviderWithKey[]>(
    [],
  );
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Providers')
      .onSnapshot(querySnapshot => {
        const providersList: ProviderWithKey[] = [];
        querySnapshot.forEach(documentSnapshot => {
          const provider = documentSnapshot.data() as Provider;
          providersList.push({
            ...provider,
            key: documentSnapshot.id,
          });
        });
        setProviders(providersList);
      });
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={BodyStyles.container}>
      <Header title="What do you need?" />
      <View style={BodyStyles.bodyContainer}>
        <SearchInput
          search={search}
          setSearch={setSerach}
          providers={providers}
          setFilteredProviders={setFilteredProviders}
          navigation={navigation}
        />
        <ProviderInfoList providers={providers} navigation={navigation} />
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
