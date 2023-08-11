import React from 'react';
import {FlatList, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import ProviderInfoCard from '../components/ProviderInfoCard';
import data from '../data/dataProviders.json';

const ProviderInfoList: React.FC = () => {
  const cardProviderSeparator = () => <View style={SearchStyles.separator} />;
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      style={SearchStyles.listContainer}
      renderItem={({item}) => (
        <ProviderInfoCard
          name={item.name}
          location={item.location}
          age={item.age}
          description={item.description}
          occupation={item.occupation}
          rate={item.rate}
        />
      )}
      ItemSeparatorComponent={cardProviderSeparator}
    />
  );
};
export default ProviderInfoList;
