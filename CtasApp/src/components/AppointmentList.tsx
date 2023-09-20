import React, {memo, useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View, Alert} from 'react-native';
import AppointmentCard from './AppointmentCard';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import {useUserContext} from '../../UserContext';
import {fetchAppointments} from '../database/GlobalGetters/GlobalGetters';
import {CreateAppointmentSchema} from '../schema/CreateAppointmentSchema';
import {deleteAppointment} from '../database/GlobalGetters/GlobalGetters';

const AppointmentList: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<CreateAppointmentSchema | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [appointments, setAppointments] = useState<
    CreateAppointmentSchema[] | undefined
  >([]);
  const {userType, sessionData} = useUserContext();

  const fetchAndSetAppointments = async () => {
    let collection = userType === 'client' ? 'Clients' : 'Providers';
    const fetchedAppointments = await fetchAppointments(
      sessionData.userEmail,
      collection,
    );
    setAppointments(fetchedAppointments);
  };

  useEffect(() => {
    fetchAndSetAppointments();
  
    const intervalId = setInterval(() => {
      fetchAndSetAppointments();
    }, 5000);
  
    return () => clearInterval(intervalId); 
  }, []);
  

  const handleDelete = async (appointmentToDelete: CreateAppointmentSchema) => {
    let collection = userType === 'client' ? 'Clients' : 'Providers';
    let email = sessionData.userEmail;

    deleteAppointment(email, collection, appointmentToDelete)
      .then(() => {
        console.log('Appointment deleted');
        Alert.alert('Appointment deleted');
        fetchAndSetAppointments();
      })
      .catch((error: any) => {
        console.error('Error deleting appointment: ', error);
      });
  };

  const openModal = (appointment: CreateAppointmentSchema) => {
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
        data={appointments}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <AppointmentCard appointment={item} onDelete={handleDelete} />
          </TouchableOpacity>
        )}
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
