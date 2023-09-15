import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StarRatingStyles} from '../styles/StarRatingStyles';
import {StarRatingsProps} from '../schema/SelectRateSchema';
import firestore from '@react-native-firebase/firestore';
import {GETCurrentUserEmail} from '../auth/CurrentUser';

const StarRating: React.FC<StarRatingsProps> = ({
  totalStars,
  providerEmail,
}) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const currentUserEmail = GETCurrentUserEmail();

  console.log('Current User Email:', currentUserEmail);
  console.log('Provider Email:', providerEmail);

  const handleStarPress = async (starIndex: number) => {
    setSelectedStars(starIndex + 1);
    if (providerEmail && currentUserEmail) {
      await saveRatingToFirebase(
        providerEmail,
        currentUserEmail,
        starIndex + 1,
      );
    }
  };

  const saveRatingToFirebase = async (
    providerEmail: string,
    userId: string,
    rating: number,
  ) => {
    try {
      const providerDocRef = await firestore()
        .collection('Providers')
        .where('email', '==', providerEmail)
        .get();

      if (!providerDocRef.empty) {
        providerDocRef.forEach(async documentSnapshot => {
          const providerId = documentSnapshot.id;
          const ratings = documentSnapshot.data().ratings || {};
          ratings[userId] = rating;
          const totalRating =
            (Object.values(ratings) as number[]).reduce(
              (a: number, b: number) => a + b,
              0,
            ) / Object.values(ratings).length;

          await firestore().collection('Providers').doc(providerId).update({
            ratings,
            totalRating,
          });
        });
      } else {
        throw 'Provider does not exist!';
      }

      console.log('Rating saved successfully');
    } catch (error) {
      console.error('Error saving rating to Firebase:', error);
    }
  };

  return (
    <View style={StarRatingStyles.starContainer}>
      {[...Array(totalStars)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleStarPress(index)}
          activeOpacity={0.7}>
          <AntDesign
            name={selectedStars > index ? 'star' : 'staro'}
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
