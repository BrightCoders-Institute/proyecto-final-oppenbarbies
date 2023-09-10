import React from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import {ProviderSetCitaProps} from '../schema/ProviderSetCitaSchema';
import {initialRegion, coordinate} from '../constants/MapConst';

const Map: React.FC<{ address: string[] | [] }> = ({ address }) => {
  const [coordinates, setCoordinates] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await Promise.all(address.map(addr => geocodeAddress(addr)));
      setCoordinates(coords);
    };

    fetchCoordinates();
  }, [address]);

  return (
    <View style={ProviderSetCitaStyles.locationContainer}>
      <View style={ProviderSetCitaStyles.mapContainer}>
        <MapView
          provider="google"
          style={ProviderSetCitaStyles.map}
          initialRegion={initialRegion}
        >
          {coordinates.map((coord, index) => (
            <Marker
              key={index}
              coordinate={coord}
              title="Ubicación"
              description={address[index]}
            />
          ))}
        </MapView>
      </View>
      <Text style={ProviderSetCitaStyles.locationText}>
        Address: {address.join(', ')}
      </Text>
    </View>
  );
};

async function geocodeAddress(address: string) {
  try {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=6c07146c0b5f4db080b4f024e2624690`);
    
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
    return {
      latitude: 0,
      longitude: 0,
    };
  }
}



export default Map;
