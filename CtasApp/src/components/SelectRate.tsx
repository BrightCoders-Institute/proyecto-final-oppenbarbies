import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StarRatingStyles} from '../styles/StarRatingStyles';
import {StarRatingsProps} from '../schema/SelectRateSchema';

const StarRating: React.FC<StarRatingsProps> = ({totalStars}) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleStarPress = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  return (
    <View style={StarRatingStyles.starContainer}>
      {[...Array(totalStars)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleStarPress(index)}
          activeOpacity={0.7}>
          <AntDesign
            name={selectedStars > index ? 'star' : 'star'}
            size={20}
            color={selectedStars > index ? 'yellow' : 'white'}
            style={StarRatingStyles.starIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
