import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {SearchStyles} from '../styles/SearchStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput from '../components/SearchInput';
import {SearchCardStyles} from '../styles/SearchCardStyles';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.headerContainer}>
        <Text style={SearchStyles.title}>What do you need?</Text>
      </View>
      <View style={SearchStyles.bodyContainer}>
        <SearchInput />
        <View style={SearchCardStyles.cardContainer}>
          <View>
            <Image
              source={require('../img/lic.jpg')}
              style={SearchCardStyles.imgProfile}
            />
          </View>
          <View style={SearchCardStyles.infoContainer}>
            <View style={SearchCardStyles.infoHeader}>
              <Text style={SearchCardStyles.name}>Lic. Valeriano Perez</Text>
              <View style={[SearchCardStyles.row, SearchCardStyles.gap]}>
                <View style={SearchCardStyles.row}>
                  <Ionicons name='location-sharp' size={25} style={SearchCardStyles.icon}/>
                  <Text style={SearchCardStyles.infoText}>Colima</Text>
                </View>
                <View style={SearchCardStyles.row}>
                  <Ionicons name='person-circle' size={25} style={SearchCardStyles.icon}/>
                  <Text style={SearchCardStyles.infoText}>Age: 26</Text>
                </View>
              </View>
              <Text style={SearchCardStyles.infoDescription}>Personalized counseling in family cases</Text>
            </View>
            <View style={SearchCardStyles.row}>
              <Text style={SearchCardStyles.infoText}>Lawyer</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
