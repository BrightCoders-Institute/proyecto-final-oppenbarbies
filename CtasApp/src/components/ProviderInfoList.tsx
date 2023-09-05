import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import ProviderInfoCard from '../components/ProviderInfoCard';
import {useUserContext} from '../../UserContext';
import firestore from '@react-native-firebase/firestore';
import {Provider} from '../schema/ProviderSchema';
import {truncateString} from '../helpers/TruncateStringHelper';

type ProviderWithKey = Provider & {key: string};

const ProviderInfoList: React.FC = () => {
  const [providers, setProviders] = useState<ProviderWithKey[]>([]);
  const {userType} = useUserContext();
  const cardProviderSeparator = () => <View style={SearchStyles.separator} />;

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
    <FlatList
      data={providers}
      keyExtractor={item => item.key}
      style={SearchStyles.listContainer}
      renderItem={({item}) => {
        return (
          <ProviderInfoCard
            name={item.name || undefined}
            location={truncateString(item.address, 25)}
            description={item.description}
            occupation={item.occupation}
            rate={item.rating}
          />
        );
      }}
      ItemSeparatorComponent={cardProviderSeparator}
    />
  );
};

export default ProviderInfoList;
