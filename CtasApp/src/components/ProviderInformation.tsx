import React from 'react';
import {View, Text, Image} from 'react-native';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from './SelectRate';
import {ProviderInformationProps} from '../schema/ProviderInformationSchema';
import Colors from '../styles/colors/Colors';

const ProviderInformation: React.FC<ProviderInformationProps> = props => {
  return (
    <View style={ProviderSetCitaStyles.providerCard}>
      <View style={ProviderSetCitaStyles.colmuns}>
        <View>
          <Image
            source={{uri: props.image}}
            style={ProviderSetCitaStyles.providerImage}
          />
        </View>
        <View style={ProviderSetCitaStyles.socialMedia}>
          <FontAwesome name="facebook-square" size={24} color={Colors.white} />
          <FontAwesome name="whatsapp" size={24} color={Colors.white} />
          <FontAwesome name="linkedin-square" size={24} color={Colors.white} />
        </View>
        <View style={ProviderSetCitaStyles.line} />
        <View style={ProviderSetCitaStyles.detailsContainer}>
          <View style={ProviderSetCitaStyles.providerDataContainer}>
            <Text style={ProviderSetCitaStyles.providerName}>{props.name}</Text>
            <Text style={ProviderSetCitaStyles.providerOccupation}>
              {props.occupation}
            </Text>
            <StarRating totalStars={5} providerEmail={props.email} />
          </View>
        </View>
      </View>
      <Text style={ProviderSetCitaStyles.servicesText}>
        {props.description}
      </Text>
    </View>
  );
};

export default ProviderInformation;
