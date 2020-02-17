import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useStateValue } from "../StateContextProvider";
import { getIcon } from '../utils/Utils';

const Loading = () => {
  const [{ latitude, longitude, locationData }, dispatch] = useStateValue();
  if (!locationData) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  } else {
    return (
      <View style={styles.dataContainer}>
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherIcon}>{getIcon(locationData.weather[0].icon)}</Text>
        </View>
        <Text style={styles.text}>City: {locationData.name}</Text>
        <Text style={styles.text}>Latitude: {latitude} Longitude: {longitude}</Text>
        <Text style={styles.text}>Temperature: {locationData.main.temp}</Text>
        <Text style={styles.text}>Max Temperature: {locationData.main.temp_max}</Text>
        <Text style={styles.text}>Min Temperature: {locationData.main.temp_min}</Text>
        <Text style={styles.text}>Humidity: {locationData.main.humidity}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    padding: 10
  },
  dataContainer: {
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  text: {
    fontSize: 18
  },
  weatherContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  weatherIcon: {
    fontFamily: 'WeatherIcons-Regular',
    fontSize: 60,
    padding: 0,
    margin: 0
  }
});

export default Loading;