import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {AppointmentDetailsModalProps} from '../schema/AppointmentDetailsModalSchema';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/colors/Colors';
import images from '../data/DataProviders';
import {truncateString} from '../helpers/TruncateStringHelper';
import {useUserContext} from '../../UserContext';
import {CreateAppointmentSchema} from '../schema/CreateAppointmentSchema';
import {truncateStringTwo} from '../helpers/TruncateStringTwoHelper';
import {BreakLine} from '../helpers/BreakLineHelper';

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  appointment,
  isVisible,
  onClose,
}) => {
  if (!appointment) {
    return null;
  }
  const {userType} = useUserContext();

  let image: string;
  let alias: string;
  let specification: string;

  const getUserInfo = (
    userType: 'client' | 'provider',
    appointment: CreateAppointmentSchema,
  ) => {
    if (userType == 'client') {
      return appointment.provider;
    } else if (userType == 'provider') {
      return appointment.client;
    }
    throw new Error('User type not found');
  };
  const userInfo = getUserInfo(userType, appointment);
  const addressLines = BreakLine(appointment.address[0], 37);

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
              <Image source={{uri: userInfo.image}} style={styles.imgPerson} />
              <View style={styles.personInfo}>
                <Text style={styles.txtName}>{userInfo.alias}</Text>
                <Text style={styles.txtDescription}>
              {userType == 'provider'
                ? `Age: ${userInfo.age}`
                : userInfo.occupation}
            </Text>
                {addressLines.map((line, index) => (
                <Text key={index} style={styles.txtLocation}>
                  {line}
                </Text>
              ))}
              </View>
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
