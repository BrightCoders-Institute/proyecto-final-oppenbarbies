import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppointmentCardStyles as styles} from '../styles/AppointmentCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Person, AppointmentCardProps} from '../schema/AppointmentCardSchema';

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  time,
  person,
  address,
}) => {
  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={styles.lineSide} />
      <View style={styles.headerContainer}>
        <Text style={styles.txtDate}>Date</Text>
        <Icon name="trash" size={25} style={styles.deleteIcon} color={'red'} />
      </View>
      <View style={styles.dateContainer}>
        <Icon name="clock-o" size={18} style={styles.clockIcon} />
        <Text style={styles.txtDateTime}>
          {' '}
          {date} | {time} hrs{' '}
        </Text>
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
            color={'#00538F'}
          />
          <Text style={styles.txtLocation}>{address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentCard;
