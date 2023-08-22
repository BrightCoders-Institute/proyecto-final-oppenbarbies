import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {AppointmentDetailsModalProps} from '../schema/AppointmentDetailsModalSchema';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/colors/Colors';
import images from '../data/DataProviders';
import {BreakLine} from '../helpers/BreakLineHelper';

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  isVisible,
  appointment,
  onClose,
}) => {
  if (!appointment) {
    return null;
  }
  const addressLines = BreakLine(appointment.address, 22);

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="fade"
      style={styles.modal}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.txtDate}>Date</Text>
            <Icons name="delete-forever" size={30} color={'red'} />
          </View>
          <Text style={styles.separator} />
          <View style={styles.dateContainer}>
            <Icon name="clock-o" size={18} />
            <Text style={styles.txtDateTime}>
              {appointment.date} | {appointment.time} hrs
            </Text>
          </View>
          <Text style={styles.divider} />

          <View style={styles.modalCenteredView}>
            <View style={styles.personInfoContainer}>
              <Image
                source={images[appointment.person.img]}
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
              <Icons
                name="map-marker-radius"
                size={18}
                style={styles.locationIcon}
                color={Colors.black}
              />
              {addressLines.map((line, index) => (
                <Text key={index} style={styles.txtLocation}>
                  {line}
                </Text>
              ))}
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
