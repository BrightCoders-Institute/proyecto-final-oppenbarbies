import {useState, useEffect} from 'react';

const useSearch = (query: string) => {
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

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
            ? result.results.map((item: {formatted: string}) => item.formatted)
            : [];
          setResults(processedResults);
          setShowResults(processedResults.length > 0);
        })
        .catch(error => console.log('error', error));
    };

    handleSearch();
  }, [query]);

  return {results, showResults, setShowResults, setResults};
};

export default useSearch;
