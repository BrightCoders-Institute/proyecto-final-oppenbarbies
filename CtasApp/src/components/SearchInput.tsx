import React, {useState} from 'react';
import {View, TextInput, Pressable, TouchableOpacity, Text} from 'react-native';
import {SearchInputProps} from '../schema/SearchInputSchema';
import {SearchStyles} from '../styles/SearchStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Provider} from '../schema/ProviderSchema';
import {truncateStringTwo} from '../helpers/TruncateStringTwoHelper';

type ProviderWithKey = Provider & {key: string};

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  setSearch,
  providers,
  setFilteredProviders,
  navigation,
}) => {
  const [suggestions, setSuggestions] = useState<ProviderWithKey[]>([]);
  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredProviders = providers.filter(provider => {
      const nameMatch = provider.name
        ? (Array.isArray(provider.name)
            ? provider.name.join(' ')
            : provider.name
          )
            .toLowerCase()
            .includes(text.toLowerCase())
        : false;
      const occupationMatch = provider.occupation
        ? provider.occupation.toLowerCase().includes(text.toLowerCase())
        : false;
      return nameMatch || occupationMatch;
    });
    setFilteredProviders(filteredProviders);

    const searchSuggestions = providers.filter(provider => {
      const nameMatch = provider.name
        ? (Array.isArray(provider.name)
            ? provider.name.join(' ')
            : provider.name
          )
            .toLowerCase()
            .includes(text.toLowerCase())
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

  const handleSuggestionPress = (suggestion: ProviderWithKey) => {
    if (suggestion && suggestion.name) {
      handleBlur();
      navigation.navigate('SetCita', {
        item: suggestion,
      });
    }
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
          caretHidden={true}
        />
        <Pressable>
          <FontAwesome name="search" size={25} style={SearchStyles.icon} />
        </Pressable>
      </View>
      {search.length > 0 && suggestions.length > 0 && (
        <View style={SearchStyles.suggestionContainer}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleSuggestionPress(item)}
              style={[
                SearchStyles.suggestionItem,
                index === suggestions.length - 1 &&
                  SearchStyles.lastSuggestionItem,
              ]}>
              <Text>{truncateStringTwo(item.name, 19)}</Text>
              <Text>{truncateStringTwo(item.occupation, 20)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchInput;
