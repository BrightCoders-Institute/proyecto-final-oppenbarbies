import * as React from 'react';
import {useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/FontAwesome6';
import MessageModal from './MessageModal';
import {truncateString} from '../helpers/TruncateStringHelper';
import {MultipleLocationInputProps} from '../schema/MultipleLocationInputProps';
import useSearch from '../hooks/useSearch';

const secondaryStyles = InputFieldStyles.secondary;

const MultipleLocationInput: React.FC<MultipleLocationInputProps> = ({
  onSelected,
  errorMessage,
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showAddresses, setShowAddresses] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);

  const {results, showResults, setShowResults, setResults} = useSearch(query);

  const handleSelectItem = (item: string) => {
    setSelectedItems([...selectedItems, item]);
    setResults([]);
    setShowResults(false);
    setQuery('Añade + direcciones desplegando el menú');
    setIsInputDisabled(true);
    onSelected?.([...selectedItems, item]);
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 1500);
  };

  const handleAddNewAddress = () => {
    setQuery('');
    setIsInputDisabled(false);
    setShowAddresses(false);
  };

  const handleDeleteAddress = (index: number) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
    onSelected?.(newSelectedItems);
  };

  return (
    <View style={secondaryStyles.container}>
      <View style={secondaryStyles.inputContainer}>
        <TextInput
          editable={!isInputDisabled}
          style={secondaryStyles.input}
          value={query}
          onChangeText={text => {
            setQuery(text);
          }}
        />
        <TouchableOpacity
          onPress={() => setShowAddresses(!showAddresses)}
          style={secondaryStyles.iconAddDown}>
          <Icon name="down" size={20} />
        </TouchableOpacity>
      </View>
      {showResults && (
        <FlatList
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={secondaryStyles.list}
          data={results}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={secondaryStyles.itemContainer}
              onPress={() => handleSelectItem(item)}>
              <Text style={secondaryStyles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {showAddresses && (
        <View style={secondaryStyles.addressContainer}>
          {selectedItems.map((item, index) => (
            <View key={index}>
              <View style={secondaryStyles.selectedItemContainer}>
                <Text style={secondaryStyles.selectedItemText}>
                  {truncateString(item, 22)}
                </Text>
                <TouchableOpacity
                  onPress={() => handleDeleteAddress(index)}
                  style={secondaryStyles.trashContainer}>
                  <Plus name="trash" size={20} />
                </TouchableOpacity>
              </View>
              <View style={secondaryStyles.line}></View>
            </View>
          ))}
          <TouchableOpacity
            onPress={handleAddNewAddress}
            style={secondaryStyles.addAddressButton}>
            <Text style={secondaryStyles.AddText}>Add New Address</Text>
            <Plus
              name="plus"
              size={20}
              style={secondaryStyles.addAddressIcon}
            />
          </TouchableOpacity>
        </View>
      )}

      {errorMessage && (
        <Text style={secondaryStyles.errorText}>{errorMessage}</Text>
      )}
      <MessageModal
        animationKey="loading"
        isVisible={isModalVisible}
        title="Añadir dirección"
        message="Espere un momento por favor..."
      />
    </View>
  );
};

export default MultipleLocationInput;
