import React from 'react';
import {View, Text, Modal, Button, Image} from 'react-native';
import { AppointmentProvider } from '../schema/AppointmentListSchema';
import { AppointmentCardStyles } from '../styles/AppointmentCardStyles';

interface AppointmentDetailsModalProps {
  isVisible: boolean;
  appointment: AppointmentProvider | null;
  onClose: () => void;
}
const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  isVisible,
  appointment,
  onClose,
}) => {
  if (!appointment) {
    return null;
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
        <Text>Date: {appointment.date}</Text>
        <Text>Time: {appointment.time}</Text>
        <Text>Address: {appointment.address}</Text>
        <Text>Person: {appointment.person.name}</Text>
        <Text>Age: {appointment.person.age}</Text>
        <Image source={require('../assets/profilePick.png')} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default AppointmentDetailsModal;