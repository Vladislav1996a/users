import React from 'react';
import { StyleSheet, View } from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(process.env.REACT_APP_MAPBOX_TOKEN);


export const Map = ({ latitude, longitude }: { latitude: string; longitude: string }) => (
    <MapboxGL.MapView>
      <MapboxGL.Camera centerCoordinate={[parseFloat(longitude), parseFloat(latitude)]} zoomLevel={14} />
      <MapboxGL.PointAnnotation id="userLocation" coordinate={[parseFloat(longitude), parseFloat(latitude)]}>
        <View style={styles.marker} />
      </MapboxGL.PointAnnotation>
    </MapboxGL.MapView>
  );

  const styles = StyleSheet.create({
    marker: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'red',
    },
  });