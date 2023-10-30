import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import TypeNavigation from '../../interfaces/TypeNavigation';
import useController from './useController';

export default function MapScreen(props: TypeNavigation) {
  const {data} = useController(props);

  return (
    <SafeAreaView style={s.container}>
      {/* Makesure data is get first before showing to map */}
      {data?.coordinate ? (
        <MapView
          provider="google"
          style={s.map}
          initialRegion={{
            latitude: data?.coordinate?.latitude ?? 0,
            longitude: data?.coordinate?.longitude ?? 0,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          <Marker
            coordinate={{
              latitude: data?.coordinate?.latitude ?? 0,
              longitude: data?.coordinate?.longitude ?? 0,
            }}
          />
        </MapView>
      ) : null}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
