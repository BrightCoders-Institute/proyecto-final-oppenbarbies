import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppoinmentCardStyles as styles} from '../styles/AppoinmentCardStyles';

// CUANDO TERMINE GIT RESTORE STACK NAVIGATION.TSX
export default function AppoinmentCard(): JSX.Element {
  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtDate}>Date</Text>
        <Text>Delete Icon</Text>
      </View>
      <Text style={styles.txtDateTime}>Tue Ago 08,2023 | 18:30 </Text>
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
            <Text>Valeriana Gonzales</Text>
            <Text>Licenciada</Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Text>location info</Text>
          <Text>location info</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
