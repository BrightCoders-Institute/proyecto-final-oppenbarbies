import React, {useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import {AutocompleteProps} from '../schema/LocationInputSchema';

const LocationInput: React.FC<AutocompleteProps & {errorMessage?: string}> = ({
  onSelected,
  errorMessage,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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

  return (
    <View style={InputFieldStyles.container}>
      <TextInput
        style={InputFieldStyles.input}
        value={selectedItem || query}
        onChangeText={text => {
          setQuery(text);
          setSelectedItem(null);
        }}
      />
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
              onPress={() => {
                setSelectedItem(item);
                onSelected(item);
                setResults([]);
                setShowResults(false);
              }}>
              <Text style={InputFieldStyles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {errorMessage && (
        <Text style={InputFieldStyles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default LocationInput;
