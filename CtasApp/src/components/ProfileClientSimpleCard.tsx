import React from 'react';
import {View, Text, Image} from 'react-native';
import ProfileClientSimpleCardStyles from '../styles/ProfileClientSimpleCardStyles';

const ProfileClientSimpleCard = () => {
  return (
    <View style={ProfileClientSimpleCardStyles.cardContainer}>
        <Text style={ProfileClientSimpleCardStyles.userType}>Client</Text>
        <View style={ProfileClientSimpleCardStyles.userImageContainer}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/15212752/pexels-photo-15212752/free-photo-of-chica-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={ProfileClientSimpleCardStyles.userImage}
      />
      </View>
      <Text style={ProfileClientSimpleCardStyles.userName}>Jessica Jhonson</Text>
        <Text style={ProfileClientSimpleCardStyles.userEmail}>Email: javier@correo.com</Text>
    </View>
  );
};

export default ProfileClientSimpleCard;
