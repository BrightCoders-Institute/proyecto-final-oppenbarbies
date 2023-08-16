import {ImageSourcePropType} from 'react-native';

export interface ProfileSelectorProps {
  source: ImageSourcePropType;
  text: string;
  onPress: () => void;
}
