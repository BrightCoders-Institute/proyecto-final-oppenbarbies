import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import Logo from '../components/Logo';
type Props = {};

const SearchScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>What do you need?</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default SearchScreen;
