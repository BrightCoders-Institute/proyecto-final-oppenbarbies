import React from 'react';
import {FlatList, View} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import ProviderInfoCard from '../components/ProviderInfoCard';
import {truncateString} from '../helpers/TruncateStringHelper';
import { ProvidersListProps } from '../schema/ProvidersListSchema';
const ProviderInfoList: React.FC<ProvidersListProps>  = ({ providers }) => {
  const cardProviderSeparator = () => <View style={SearchStyles.separator} />;
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
