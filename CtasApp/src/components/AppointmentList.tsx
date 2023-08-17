import React, {memo, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppointmentCard from './AppointmentCard';
import {AppointmentListStyles as styles} from '../styles/AppointmentListStyles';
import {dataProviders} from '../data/DataProviders';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import { AppointmentCardProps } from '../schema/AppointmentCardSchema';

const AppointmentList: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentCardProps | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (appointment: AppointmentCardProps) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={dataProviders}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <AppointmentCard
              date={item.date}
              time={item.time}
              address={item.address}
              person={item.person}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      <AppointmentDetailsModal
        isVisible={isModalVisible}
        appointment={selectedAppointment}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
};


export default memo(AppointmentList);
