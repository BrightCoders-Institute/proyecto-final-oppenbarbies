import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type UserType = 'client' | 'provider';

export interface SignInScreenParams {
  userType: UserType;
}


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
  AppointmentDetails: undefined;
  FinishAppointment: undefined;
};

export type SplashScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;
export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;
