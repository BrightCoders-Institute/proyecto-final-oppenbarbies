import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import Colors from '../styles/colors/Colors';

interface AddressOption {
  id: string;
  title: string;
}

const AddressPicker: React.FC = () => {
  const allOptions: AddressOption[] = [
    {id: '1', title: 'Colima, Casas, Mexico'},
    {id: '2', title: 'Mexico City, Mexico'},
    {id: '3', title: 'Guadalajara, Jalisco, Mexico'},
    {id: '4', title: 'Monterrey, Nuevo León, Mexico'},
    {id: '5', title: 'Tijuana, Baja California, Mexico'},
    {id: '6', title: 'Puebla, Puebla, Mexico'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <AutocompleteDropdown
          dataSet={allOptions}
          onSelectItem={item => {
            if (item) {
              console.log('Dirección seleccionada:', item.title);
            }
          }}
          direction="down"
          textInputProps={{
            placeholder: 'Ingrese una dirección',
            style: styles.inputStyle,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  autocompleteContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.babyBlue,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  inputStyle: {
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: Colors.white,
    fontFamily: 'Inter-ExtraBold',
  },
});

export default AddressPicker;
