import * as React from 'react';
import {View, Text} from 'react-native';
import BodyStyles from '../styles/BodyStyles';
import {HeaderProps} from '../schema/HeaderSchema';

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={BodyStyles.headerContainer}>
      <Text style={BodyStyles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
