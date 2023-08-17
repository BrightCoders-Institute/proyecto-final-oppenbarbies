import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import { AppointmentProvider } from '../schema/AppointmentListSchema';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../styles/colors/Colors';

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
    <Modal transparent visible={isVisible} animationType="fade" style={styles.modal}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.txtDate}>Date</Text>
            <Icon name="trash" size={25} style={styles.deleteIcon} color={'red'} />
          </View>
          <View style={styles.dateContainer}>
            <Icon name="clock-o" size={18} style={styles.clockIcon} />
            <Text style={styles.txtDateTime}>{appointment.date} | {appointment.time} hrs</Text>
          </View>
          <Text style={styles.divider} />

          <View style={styles.footContainer}>
            <View style={styles.personInfoContainer}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/15212752/pexels-photo-15212752/free-photo-of-chica-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
                style={styles.imgPerson}
              />
              <View style={styles.personInfo}>
                <Text style={styles.txtName}>{appointment.person.name}</Text>
                <Text style={styles.txtDescription}>
                  Age: {appointment.person.age}
                </Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <Icon
                name="map-pin"
                size={18}
                style={styles.locationIcon}
                color={Colors.normalBlue}
              />
              <Text style={styles.txtLocation}>{appointment.address}</Text>
            </View>
          </View>
          <Text style={styles.divider} />
          <View style={styles.descriptionContainer}>
              <Text style={styles.txtName}> Description</Text>
              <Text style={styles.txtDescription}>{appointment.description}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentDetailsModal;