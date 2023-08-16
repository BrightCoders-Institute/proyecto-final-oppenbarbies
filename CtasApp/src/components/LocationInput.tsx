import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import {AutocompleteProps} from '../schema/LocationInputSchema';
import {API_URL, styles} from '../constants/LocationInputConst';

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

    fetch(`${API_URL}&text=${query}`)
      .then(response => response.json())
      .then(({results: fetchedResults = []}) => {
        const processedResults = fetchedResults.map(
          (item: {formatted: string}) => item.formatted,
        );
        setResults(processedResults);
        setShowResults(processedResults.length > 0);
      })
      .catch(error => console.log('error', error));
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
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
          style={styles.list}
          data={results}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                setSelectedItem(item);
                onSelected(item);
                setResults([]);
                setShowResults(false);
              }}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default LocationInput;
