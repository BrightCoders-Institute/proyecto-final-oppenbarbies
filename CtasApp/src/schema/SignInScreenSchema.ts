import { NativeStackScreenProps } from '@react-navigation/native-stack';



export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;


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
  AppointmentDetails: undefined;
};

export type SplashScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList>;
