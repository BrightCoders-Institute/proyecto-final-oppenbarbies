import * as React from 'react';
import { UserContextProvider } from './UserContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {AutocompleteDropdownContextProvider} from 'react-native-autocomplete-dropdown';

export default function App() {
  return (
    <UserContextProvider>
      <AutocompleteDropdownContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </AutocompleteDropdownContextProvider>
    </UserContextProvider>
  );
}
