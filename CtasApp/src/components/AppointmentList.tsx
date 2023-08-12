import * as React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppointmentCard from './AppointmentCard';
import {AppointmentListStyles as styles} from '../styles/AppointmentListStyles';
import {
  PersonProvider,
  AppointmentProvider,
} from '../schema/AppointmentListSchema';

const dataClient = [
  {
    id: '1',
    date: 'Mon Ago 10,2023',
    time: '07:00',
    address: 'Calle lagos #123, Colonia Montes',
    person: {
      img: 'something',
      name: 'Antonio Ramirez',
      profession: 'Ingeniero',
    },
  },
  {
    id: '2',
    date: 'Tue Ago 08,2023',
    time: '08:30',
    address: 'Calle lagos #123, Colonia Montes',
    person: {
      img: 'something',
      name: 'Valeriano Jhonson',
      profession: 'Licenciado',
    },
  },
  {
    id: '3',
    date: 'Sat Ago 20,2023',
    time: '05:30',
    address: 'Calle lagos #120, Colonia Montes',
    person: {
      img: 'something',
      name: 'Valeriano Jhonson',
      profession: 'Licenciado',
    },
  },
  {
    id: '4',
    date: 'Wed Ago 21,2023',
    time: '12:00',
    address: 'Calle lagos #133, Colonia Montes',
    person: {
      img: 'something',
      name: 'Juan Gonzales',
      profession: 'Doctor',
    },
  },
  {
    id: '5',
    date: 'Fri Ago 11,2023',
    time: '11:30',
    address: 'Calle lagos #111, Colonia Montes',
    person: {
      img: 'something',
      name: 'Alan Smith',
      profession: 'Dentista',
    },
  },
];

const dataProviders: AppointmentProvider[] = [
  {
    id: '1',
    date: 'Mon Ago 10,2023',
    time: '07:00',
    address: 'Calle lagos #123, Colonia Montes',
    person: {
      img: 'something',
      name: 'Antonio Ramirez',
      age: 21,
    },
  },
  {
    id: '2',
    date: 'Tue Ago 08,2023',
    time: '08:30',
    address: 'Calle lagos #123, Colonia Montes',
    person: {
      img: 'something',
      name: 'Valeriano Jhonson',
      age: 23,
    },
  },
  {
    id: '3',
    date: 'Sat Ago 20,2023',
    time: '05:30',
    address: 'Calle lagos #120, Colonia Montes',
    person: {
      img: 'something',
      name: 'Valeriano Jhonson',
      age: 25,
    },
  },
  {
    id: '4',
    date: 'Wed Ago 21,2023',
    time: '12:00',
    address: 'Calle lagos #133, Colonia Montes',
    person: {
      img: 'something',
      name: 'Juan Gonzales',
      age: 22,
    },
  },
  {
    id: '5',
    date: 'Fri Ago 11,2023',
    time: '11:30',
    address: 'Calle lagos #111, Colonia Montes',
    person: {
      img: 'something',
      name: 'Alan Smith',
      age: 23,
    },
  },
];

const AppointmentList: React.FC = () => {
  return (
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
};
export default AppointmentList;
