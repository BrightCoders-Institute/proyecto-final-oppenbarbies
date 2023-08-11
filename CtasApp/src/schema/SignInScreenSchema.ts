import {RouteProp, NavigationProp} from '@react-navigation/native';

export type SignInProps = {
  navigation: NavigationProp<RootStackParamList, 'SignIn'>;
  route: RouteProp<RootStackParamList, 'SignIn'>;
};

export type SignInScreenParams = {
  userType: 'client' | 'provider';
};

export type RootStackParamList = {
  SignIn: SignInScreenParams;
  Splash: undefined;
  Welcome: undefined;
  ProfileClient: undefined;
  ProfileProvider: undefined;
  MyAppointments: undefined;
  HomeClient: undefined;
  SetCita: undefined;
  SearchScreen: undefined;
};
