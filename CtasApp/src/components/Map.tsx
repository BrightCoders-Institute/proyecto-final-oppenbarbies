import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ProviderSetCitaStyles from '../styles/ProviderSetCitaStyles';
import { ProviderSetCitaProps } from '../schema/ProviderSetCitaSchema';

const initialRegion = {
  latitude: 19.2638,
  longitude: -103.746,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const coordinate = {
  latitude: 19.2638,
  longitude: -103.746,
};

const Map: React.FC<ProviderSetCitaProps> = props => {
  return (
    <View style={ProviderSetCitaStyles.locationContainer}>
      <View style={ProviderSetCitaStyles.mapContainer}>
        <MapView provider="google" style={ProviderSetCitaStyles.map} initialRegion={initialRegion}>
          <Marker coordinate={coordinate} title="Ubicación" description="Oficina" />
        </MapView>
      </View>
      <Text style={ProviderSetCitaStyles.locationText}>Address: {props.address}</Text>
    </View>
  );
};

export default Map;
