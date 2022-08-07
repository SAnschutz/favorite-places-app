import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import { useState, useLayoutEffect, useCallback } from 'react';
import IconButton from '../components/UI/IconButton';

function Map({ navigation }) {
  //any component that is registered as a screen recieves the navigation as a prop
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78, //this defines the center of the map
    longitude: -122.43,
    latitudeDelta: 0.022, //this defines the zoom level (how much of the map is visible)
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location selected',
        'Please tap a location on map to select it'
      );
      return;
    }

    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon='save'
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title='Picked Location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
