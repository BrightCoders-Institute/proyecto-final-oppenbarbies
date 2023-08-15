import {de} from 'date-fns/locale';

declare module 'react-native-modern-datepicker';
declare module 'react-native-vector-icons/AntDesign';
declare module 'react-native-vector-icons/FontAwesome';
declare module 'react-native-vector-icons/FontAwesome5';
declare module 'react-native-vector-icons/Entypo';
declare module 'react-native-vector-icons/EvilIcons';
declare module 'react-native-vector-icons/Feather';
declare module 'react-native-vector-icons/Fontisto';
declare module 'react-native-vector-icons/Foundation';
declare module 'react-native-vector-icons/FontAwesome6';
declare module 'react-native-vector-icons/Ionicons';
declare module 'react-native-vector-icons/MaterialCommunityIcons';
declare module 'react-native-vector-icons/MaterialIcons';
declare module '@react-native-community/datetimepicker';
declare module '@react-navigation/native';
declare module 'react-native-config' {
    export interface NativeConfig {
        API_KEY?: string;
        AUTH_DOMAIN?: string;
        PROJECT_ID?: string;
        STORAGE_BUCKET?: string;
        MESSAGING_SENDER_ID?: string;
        APP_ID?: string;
        WEB_CLIENT?: string; 
    }
    export const Config: NativeConfig;
    export default Config;
  }
  