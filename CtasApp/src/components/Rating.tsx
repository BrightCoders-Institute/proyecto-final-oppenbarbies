import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles';
import {RatingProps} from '../schema/RatingSchema';

const Rating: React.FC<RatingProps> = ({stars}): JSX.Element => {
  return (
    <View style={HomeClientScreenStyles.rateContainer}>
      <View style={HomeClientScreenStyles.rate}>
        <Text style={HomeClientScreenStyles.rateText}>{stars}</Text>
        <AntDesign name="star" size={15} color={'yellow'} />
      </View>
    </View>
  );
};

export default Rating;
