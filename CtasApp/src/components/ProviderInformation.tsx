import React from 'react';
import {View, Text, Image} from 'react-native';

type Props = {};

const ProviderInformation: React.FC<Props> = () => {
  return (
    <View>
      <View>
        <Image source={require('../assets/providerpicture.png')} />
      </View>
      <Text>ProviderInformation</Text>
    </View>
  );
};

export default ProviderInformation;
