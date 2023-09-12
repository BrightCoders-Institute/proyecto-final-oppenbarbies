import {RootStackParamList} from '../schema/SignInScreenSchema';

export const MENU_ITEMS: {name: string; screen: keyof RootStackParamList}[] = [
  {name: 'user-alt', screen: 'HomeClient'},
  {name: 'calendar-day', screen: 'MyAppointments'},
  {name: 'search', screen: 'SearchScreen'},
  {name: 'tools', screen: 'AppointmentDetails'},
];
