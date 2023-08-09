import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchCardStyles} from '../styles/SearchCardStyles';
import {ProviderInfoCardProps} from '../schema/ProviderInfoCardSchema';
import {ProviderInfoCardHooks} from '../hooks/ProviderInfoCardHooks';
const ProviderInfoCard: React.FC<ProviderInfoCardProps> = ({
  name,
  location,
  age,
  description,
  occupation,
}) => {
  const {formatDescription} = ProviderInfoCardHooks();
  const descriptionFormatted: string = formatDescription(description);
  return (
    <View style={SearchCardStyles.cardContainer}>
      <View>
        <Image
          source={require('../img/lic.png')}
          style={SearchCardStyles.imgProfile}
        />
      </View>
      <View style={SearchCardStyles.infoContainer}>
        <View style={SearchCardStyles.infoHeader}>
          <Text style={SearchCardStyles.name}>{name}</Text>
          <View style={[SearchCardStyles.row, SearchCardStyles.gap]}>
            <View style={SearchCardStyles.row}>
              <Ionicons
                name="location-sharp"
                size={25}
                style={SearchCardStyles.icon}
              />
              <Text style={SearchCardStyles.infoText}>{location}</Text>
            </View>
            <View style={SearchCardStyles.row}>
              <Ionicons
                name="person-circle"
                size={25}
                style={SearchCardStyles.icon}
              />
              <Text style={SearchCardStyles.infoText}>Age: {age}</Text>
            </View>
          </View>
          <Text style={SearchCardStyles.infoDescription}>{descriptionFormatted}</Text>
        </View>
        <View style={SearchCardStyles.row}>
          <Text style={SearchCardStyles.infoText}>{occupation}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProviderInfoCard;
