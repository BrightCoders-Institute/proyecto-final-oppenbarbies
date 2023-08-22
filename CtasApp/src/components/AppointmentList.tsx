import React, {memo, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AppointmentCard from './AppointmentCard';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import {dataProviders} from '../data/DataProviders';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import {AppointmentCardProps} from '../schema/AppointmentCardSchema';

const AppointmentList: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentCardProps | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (appointment: AppointmentCardProps) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalVisible(false);
  };

  const SeparatorComponent = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.container}>
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
        style={styles.container}
        ItemSeparatorComponent={SeparatorComponent}
      />
      <AppointmentDetailsModal
        isVisible={isModalVisible}
        appointment={selectedAppointment}
        onClose={closeModal}
      />
    </View>
  );
};

export default memo(AppointmentList);
