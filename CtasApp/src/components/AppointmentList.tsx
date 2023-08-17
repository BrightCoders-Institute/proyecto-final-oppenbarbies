import React, {memo} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppointmentCard from './AppointmentCard';
import {AppointmentListStyles as styles} from '../styles/AppointmentListStyles';
import {dataProviders} from '../data/DataProviders';

const AppointmentList: React.FC = () => (
  <SafeAreaView style={styles.listContainer}>
    <FlatList
      data={dataProviders}
      renderItem={({item}) => (
        <AppointmentCard
          date={item.date}
          time={item.time}
          address={item.address}
          person={item.person}
        />
      )}
      keyExtractor={item => item.id}
      style={styles.flatList}
    />
  </SafeAreaView>
);

export default memo(AppointmentList);
