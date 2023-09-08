import React, {useState, useEffect} from 'react';
import {View, TextInput, Pressable, TouchableOpacity, Text} from 'react-native';
import {SearchInputProps} from '../schema/SearchInputSchema';
import {SearchStyles} from '../styles/SearchStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Provider} from '../schema/ProviderSchema';
type ProviderWithKey = Provider & {key: string};

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  setSearch,
  providers,
  setFilteredProviders,
}) => {
  const [suggestions, setSuggestions] = useState<ProviderWithKey[]>([]);
  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredProviders = providers.filter(provider => {
      const nameMatch = provider.name
        ? provider.name.toLowerCase().includes(text.toLowerCase())
        : false;
      const occupationMatch = provider.occupation
        ? provider.occupation.toLowerCase().includes(text.toLowerCase())
        : false;
      return nameMatch || occupationMatch;
    });
    setFilteredProviders(filteredProviders);

    const searchSuggestions = providers.filter(provider => {
      const nameMatch = provider.name
        ? provider.name.toLowerCase().startsWith(text.toLowerCase())
        : false;
      const occupationMatch = provider.occupation
        ? provider.occupation.toLowerCase().startsWith(text.toLowerCase())
        : false;
      return nameMatch || occupationMatch;
    });
    setSuggestions(searchSuggestions);
  };

  const handleBlur = () => {
    setSuggestions([]);
    setSearch('');
  };

  return (
    <View>
      <View style={SearchStyles.inputContainer}>
        <TextInput
          style={SearchStyles.textInput}
          placeholder="Doctor, Lawyer..."
          value={search}
          onChangeText={handleSearch}
          onBlur={handleBlur}
        />
        <Pressable>
          <FontAwesome name="search" size={25} style={SearchStyles.icon} />
        </Pressable>
      </View>
      {search.length > 0 && (
        <View style={SearchStyles.suggestionContainer}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              style={[
                SearchStyles.suggestionItem,
                index === suggestions.length - 1 &&
                  SearchStyles.lastSuggestionItem,
              ]}>
              <Text>{item.name}</Text>
              <Text>{item.occupation}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchInput;
