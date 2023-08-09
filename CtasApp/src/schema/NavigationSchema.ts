import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignIn: {
    userType: string;
  };
  ProfileClient: undefined;
  ProfileProvider: undefined;
  MyAppointments: undefined;
  HomeClient: undefined;
  HomeProvider: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;
export type Route = RouteProp<RootStackParamList, 'SignIn'>;
