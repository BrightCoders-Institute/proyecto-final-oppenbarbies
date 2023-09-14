import React, {useEffect, useState, useMemo} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import {truncateStringTwo} from '../helpers/TruncateStringTwoHelper';

interface MapProps {
  address: string[] | undefined;
}

const Map: React.FC<MapProps> = ({address = []}) => {
  const [coordinates, setCoordinates] = useState<
    ({latitude: number; longitude: number} | null)[]
  >([]);
  const [initialRegion, setInitialRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coords = await Promise.all(
          address.map(addr => geocodeAddress(addr)),
        );

        const validCoords = coords.filter(
          coord => coord && coord.latitude && coord.longitude,
        );

        if (validCoords.length > 0) {
          const avgLatitude =
            validCoords.reduce(
              (sum, curr) => (curr ? sum + curr.latitude : sum),
              0,
            ) / validCoords.length;
          const avgLongitude =
            validCoords.reduce(
              (sum, curr) => (curr ? sum + curr.longitude : sum),
              0,
            ) / validCoords.length;

          setInitialRegion({
            latitude: avgLatitude,
            longitude: avgLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          setCoordinates(validCoords);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (address.length > 0) {
      fetchCoordinates();
    }
  }, [address]);

  const addressText = useMemo(() => {
    return truncateStringTwo(address.join(', '), 93);
  }, [address]);

  return (
    <View style={ProviderSetCitaStyles.locationContainer}>
      <View style={ProviderSetCitaStyles.mapContainer}>
        {initialRegion && (
          <MapView
            provider="google"
            style={ProviderSetCitaStyles.map}
            initialRegion={initialRegion}>
            {coordinates.map((coord, index) =>
              coord ? (
                <Marker
                  key={index}
                  coordinate={coord}
                  title="Ubicación"
                  description={address[index]}
                />
              ) : null,
            )}
          </MapView>
        )}
      </View>
      <Text style={ProviderSetCitaStyles.locationText}>
        Address: {addressText}
      </Text>
    </View>
  );
};

async function geocodeAddress(address: string | number | boolean) {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        address,
      )}&apiKey=6c07146c0b5f4db080b4f024e2624690`,
    );

    if (!response.ok) {
      throw new Error('Respuesta de red no fue ok');
    }

    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const location = data.features[0].geometry.coordinates;
      return {
        latitude: location[1],
        longitude: location[0],
      };
    } else {
      throw new Error('No se pudo geocodificar la dirección');
    }
  } catch (error) {
    console.error('Error geocodificando la dirección:', error);
    return null;
  }
}

export default React.memo(Map);
