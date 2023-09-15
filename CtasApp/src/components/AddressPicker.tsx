import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {AddressOption} from '../schema/AddressPickerSchema';
import AddressPickerStyles from '../styles/AddressPickerStyles';
import {GetProvider} from '../database/Providers/GettersProvider';
import {GETCurrentUserEmail} from '../auth/CurrentUser';

const AddressPicker: React.FC = () => {
  const [allOptions, setAllOptions] = useState<AddressOption[]>([]);

  useEffect(() => {
    const userEmail = GETCurrentUserEmail();

    if (!userEmail) {
      console.error('Usuario no autenticado.');
      return;
    }
    const fetchData = async () => {
      try {
        const provider = await GetProvider(userEmail);
        if (provider && provider.address) {
          const newOptions: AddressOption[] = provider.address.map(
            (address, index) => ({
              id: index.toString(),
              title: address,
            }),
          );
          setAllOptions(newOptions);
        }
      } catch (error) {
        console.error('Error al obtener los datos del proveedor:', error);
      }
    };
    fetchData();
  }, []);

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
