import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {AutocompleteDropdownContextProvider} from 'react-native-autocomplete-dropdown';

export default function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AutocompleteDropdownContextProvider>
  );
}
