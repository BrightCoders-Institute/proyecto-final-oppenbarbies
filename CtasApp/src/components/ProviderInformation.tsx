import React from 'react';
import {View, Text, Image} from 'react-native';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from './SelectRate';

type Props = {
  name: string;
  age: number;
  location: string;
};

const ProviderInformation: React.FC<Props> = props => {
  return (
    <View style={ProviderSetCitaStyles.providerCard}>
      <View>
        <Image source={require('../assets/providerpicture.png')} />
      </View>
      <View style={ProviderSetCitaStyles.detailsContainer}>
        <Text style={ProviderSetCitaStyles.providerName}>{props.name}</Text>
        <View style={ProviderSetCitaStyles.providerDataContainer}>
          <Text style={ProviderSetCitaStyles.providerDataText}>
            Age: {props.age}
          </Text>
          <Text style={ProviderSetCitaStyles.providerDataText}>
            {props.location}
          </Text>
        </View>
        <StarRating totalStars={5} />
        <Text style={ProviderSetCitaStyles.servicesText}>
          Personalized counseling in family cases
        </Text>
        <View style={ProviderSetCitaStyles.socialMedia}>
          <FontAwesome name="facebook-square" size={24} color="#ffff" />
          <FontAwesome name="whatsapp" size={24} color="#ffff" />
        </View>
      </View>
    </View>
  );
};

export default ProviderInformation;
