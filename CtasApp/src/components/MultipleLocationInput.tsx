import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/FontAwesome6';

interface MultipleLocationInputProps {
  onSelected?: (items: string[]) => void;
  errorMessage?: string;
}

const MultipleLocationInput: React.FC<MultipleLocationInputProps> = ({
  onSelected,
  errorMessage,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showAddresses, setShowAddresses] = useState<boolean>(false);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const handleSearch = () => {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&format=json&apiKey=6c07146c0b5f4db080b4f024e2624690`,
      )
        .then(response => response.json())
        .then(result => {
          const processedResults = result.results
            ? result.results.map((item: {formatted: any}) => item.formatted)
            : [];
          setResults(processedResults);
          setShowResults(processedResults.length > 0);
        })
        .catch(error => console.log('error', error));
    };

    handleSearch();
  }, [query]);

  const handleSelectItem = (item: string) => {
    setSelectedItems([...selectedItems, item]);
    setResults([]);
    setShowResults(false);
    onSelected?.([...selectedItems, item]);
  };

  const handleAddNewAddress = () => {
    setQuery('');
    setShowAddresses(false);
  };

  return (
    <View style={InputFieldStyles.container}>
      <View style={InputFieldStyles.inputContainer}>
        <TextInput
          style={InputFieldStyles.input}
          value={query}
          onChangeText={text => {
            setQuery(text);
          }}
        />
        <TouchableOpacity
          onPress={() => setShowAddresses(!showAddresses)}
          style={InputFieldStyles.iconAddDown}>
          <Icon name="down" size={20} />
        </TouchableOpacity>
      </View>
      {showResults && (
        <FlatList
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={InputFieldStyles.list}
          data={results}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={InputFieldStyles.itemContainer}
              onPress={() => handleSelectItem(item)}>
              <Text style={InputFieldStyles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {showAddresses && (
        <View style={InputFieldStyles.addressContainer}>
          {selectedItems.map((item, index) => (
            <View key={index}>
              <Text style={InputFieldStyles.selectedItemText}>{item}</Text>
              <View style={InputFieldStyles.line}></View>
            </View>
          ))}
          <TouchableOpacity
            onPress={handleAddNewAddress}
            style={InputFieldStyles.addAddressButton}>
            <Text style={InputFieldStyles.AddText}>Add New Address</Text>
            <Plus
              name="plus"
              size={20}
              style={InputFieldStyles.addAddressIcon}
            />
          </TouchableOpacity>
        </View>
      )}
      {errorMessage && (
        <Text style={InputFieldStyles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default MultipleLocationInput;
