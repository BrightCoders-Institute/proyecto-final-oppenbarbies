import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import ProfileClientScreen from '../screens/ProfileClientScreen';
import ProfileProviderScreen from '../screens/ProfileProviderScreen';
import MyAppointmentsScreen from '../screens/MyAppointmentsScreen';
import HomeClientScreen from '../screens/HomeClientScreen';
import HomeProviderScreen from '../screens/HomeProviderScreen';
import MyAppoinmentView from '../screens/MyAppoinmentView';

const Stack = createNativeStackNavigator();
const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileClient"
        component={ProfileClientScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileProvider"
        component={ProfileProviderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeClient"
        component={HomeClientScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeProvider"
        component={HomeProviderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAppoinments"
        component={MyAppoinmentView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
