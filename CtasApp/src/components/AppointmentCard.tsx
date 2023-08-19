import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppointmentCardProps} from '../schema/AppointmentCardSchema';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Colors from '../styles/colors/Colors';
import images from '../data/DataProviders';
import { BreakLine } from '../helpers/BreakLineHelper';
const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  time,
  person,
  address,
}) => (
  <View style={styles.cardContainer}>
    <View style={styles.lineSide} />
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.txtDate}>Date</Text>
        <View style={styles.dateContainer}>
          <Icon name="clock-o" size={18} />
          <Text style={styles.txtDateTime}>
            {date} | {time} hrs
          </Text>
        </View>
      </View>
      <Icon name="trash" size={30} color={'red'} />
    </View>
    <Text style={styles.divider} />
    <View style={styles.bodyContainer}>
      <View style={styles.personInfoContainer}>
        <Image source={images[person.img]} style={styles.imgPerson} />
        <View style={styles.personInfo}>
          <Text style={styles.txtName}>{person.name}</Text>
          <Text style={styles.txtDescription}>
            {person.age ? `Age: ${person.age}` : person.profession}
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
        <Text style={styles.txtLocation}>{BreakLine(address,30)}</Text>
      </View>
    </View>
  </View>
);

export default memo(AppointmentCard);
