import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchCardStyles} from '../styles/SearchCardStyles';
import {ProviderInfoCardProps} from '../schema/ProviderInfoCardSchema';
import Colors from '../styles/colors/Colors';
import {ProviderInfoCardHooks} from '../hooks/ProviderInfoCardHooks';

const ProviderInfoCard: React.FC<ProviderInfoCardProps> = ({
  name,
  location,
  description,
  occupation,
  rate,
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
          <View style={[SearchCardStyles.row, SearchCardStyles.spaceBetween]}>
            <View style={SearchCardStyles.row}>
              <Ionicons
                name="location-sharp"
                size={25}
                style={SearchCardStyles.icon}
              />
              <Text style={SearchCardStyles.infoText}>{location}</Text>
            </View>
            <View style={SearchCardStyles.row} />
          </View>
          <Text style={SearchCardStyles.infoDescription}>
            {descriptionFormatted}
          </Text>
        </View>
        <View style={[SearchCardStyles.row, SearchCardStyles.spaceBetween]}>
          <Text style={SearchCardStyles.infoText}>{occupation}</Text>
          <View style={[SearchCardStyles.row, SearchCardStyles.rate]}>
            <Text style={SearchCardStyles.rateNumber}>{rate}</Text>
            <AntDesign name="star" size={15} color={Colors.starColor} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProviderInfoCard;
