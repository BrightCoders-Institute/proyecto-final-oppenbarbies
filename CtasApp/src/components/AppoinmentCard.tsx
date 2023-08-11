import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppoinmentCardStyles as styles } from '../styles/AppoinmentCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from 'react-native/Libraries/NewAppScreen';

// CUANDO TERMINE GIT RESTORE STACK NAVIGATION.TSX
// DESPUES DE CLIENTE SEGUIA FORM PROFILE CLIENT
type appoinmentCardProps= {
  date: String,
  time: String,
  person: Person,
  address: String
}

type Person = {
  name: String,
  img: String,
  age?: number,
  profession?: String,
}

export default function AppoinmentCard({date, time,person, address}: appoinmentCardProps): JSX.Element {

  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={styles.lineSide}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.txtDate}>Date</Text>
        <Icon name='trash' size={25} style={styles.deleteIcon} color={'red'} />
      </View>
      <View style={styles.dateContainer}>
        <Icon name='clock-o' size={18} style={styles.clockIcon} />
        <Text style={styles.txtDateTime}>   {date} | {time} hrs </Text>
      </View>
      <Text style={styles.divider}></Text>

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
            <Text style={styles.txtDescription}>{(person.age)?`Age: ${person.age}`: person.profession}</Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Icon name='map-pin' size={18} style={styles.locationIcon} color={"#00538F"}/>
          <Text style={styles.txtLocation}>{address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
