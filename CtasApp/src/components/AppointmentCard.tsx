import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppointmentCardProps} from '../schema/AppointmentCardSchema';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Colors from '../styles/colors/Colors';
import {truncateStringTwo} from '../helpers/TruncateStringTwoHelper';
import { truncateString } from '../helpers/TruncateStringHelper';
import {useUserContext} from '../../UserContext';
import {CreateAppointmentSchema} from '../schema/CreateAppointmentSchema';

const AppointmentCard: React.FC<AppointmentCardProps> = ({appointment, onDelete}) => {
  const {userType} = useUserContext();

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
  const addressLines = truncateString(appointment.address[0], 35);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.lineSide} />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.txtDate}>Date</Text>
          <View style={styles.dateContainer}>
            <Icon name="clock-o" size={18} />
            <Text style={styles.txtDateTime}>
              {appointment.date} | {appointment.time} hrs
            </Text>
          </View>
        </View>
        <Icons name="delete-forever" size={30} color={'red'} onPress={() => onDelete(appointment)} />
      </View>
      <Text style={styles.divider} />
      <View style={styles.bodyContainer}>
        <View style={styles.personInfoContainer}>
          <Image source={{uri: userInfo.image}} style={styles.imgPerson} />
          <View style={styles.personInfo}>
            <Text style={styles.txtName}>
              {truncateStringTwo(userInfo.alias, 17)}
            </Text>
            <Text style={styles.txtDescription}>
              {userType == 'provider'
                ? `Age: ${userInfo.age}`
                : userInfo.occupation}
            </Text>
            <View style={styles.locationContainer}>
              <Icons name="map-marker-radius" size={16} color={Colors.black} />
              <Text style={styles.txtLocation}>{addressLines}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(AppointmentCard);
