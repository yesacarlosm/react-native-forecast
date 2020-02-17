import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useStateValue } from "../StateContextProvider";

const Loading = () => {
  const [{ latitude, longitude, locationData }, dispatch] = useStateValue();
  if (!locationData) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>City Name: {locationData.name}</Text>
        <Text>Latitude: {latitude} Longitude: {longitude}</Text>
        <Text>Temperature: {locationData.main.temp}</Text>
        <Text>Max Temperature: {locationData.main.temp_max}</Text>
        <Text>Min Temperature: {locationData.main.temp_min}</Text>
        <Text>Humidity: {locationData.main.humidity}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Loading;