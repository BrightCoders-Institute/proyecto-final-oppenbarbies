import * as React from 'react';
import {View} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {AddressOption} from '../schema/AddressPickerSchema';
import AddressPickerStyles from '../styles/AddressPickerStyles';

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
    <View style={AddressPickerStyles.container}>
      <View style={AddressPickerStyles.autocompleteContainer}>
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
            style: AddressPickerStyles.inputStyle,
          }}
        />
      </View>
    </View>
  );
};

export default AddressPicker;
