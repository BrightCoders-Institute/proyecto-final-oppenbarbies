import React from 'react';
import {View, Text, Image} from 'react-native';
import ProfileClientSimpleCardStyles from '../styles/ProfileClientSimpleCardStyles';
import auth from '@react-native-firebase/auth';

type ProfileClientSimpleCardProps= {
  userType: String | null;
  userName: String | null;
  userEmail: String | null;
}
const ProfileClientSimpleCard: React.FC<ProfileClientSimpleCardProps> = ({
  userType,
  userName,
  userEmail,
}) => {
  

  return (
    <View style={ProfileClientSimpleCardStyles.cardContainer}>
      <Text style={ProfileClientSimpleCardStyles.userType}>{userType}</Text>
      <View style={ProfileClientSimpleCardStyles.userImageContainer}>
          <Image
            source={{
              uri: (user?.photoURL)?`${user?.photoURL}`: 'https://images.pexels.com/photos/15212752/pexels-photo-15212752/free-photo-of-chica-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={ProfileClientSimpleCardStyles.userImage}
          />
      </View>
      <Text style={ProfileClientSimpleCardStyles.userName}>
        {user?.displayName}
      </Text>
      <Text style={ProfileClientSimpleCardStyles.userEmail}>
        Email: {user?.email}
      </Text>
    </View>
  );
};

export default ProfileClientSimpleCard;
