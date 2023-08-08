import React from 'react';
import { FlatList, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import SearchInput from '../components/SearchInput';
import ProviderInfoCard from '../components/ProviderInfoCard';
import data from '../data/dataProviders.json';
type Props = {};

const ProviderInfoList: React.FC<Props> = () => {
  const cardProviderSeparator = () => <View style={SearchStyles.separator} />;
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      style = {SearchStyles.listContainer}
      renderItem={({ item }) => (
        <ProviderInfoCard
          name={item.name}
          location={item.location}
          age={item.age}
          description={item.description}
          occupation={item.occupation}
        />
      )}
      ItemSeparatorComponent={cardProviderSeparator}
    />
  );
};
export default ProviderInfoList;