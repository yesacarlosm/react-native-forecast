import React from 'react';
import Map from './Map';
import Input from './Input';
import Data from './Data';
import History from './History';
import { useStateValue } from "../StateContextProvider";
import { SafeAreaView, Alert, StyleSheet } from 'react-native';
import { fetchLocationDataByCityName, fetchLocationDataByCoords } from '../services/LocationService';
import { updateHistory } from '../services/HistoryService';
import { randomColor } from '../utils/Utils';

const Main = () => {
  const [{ latitude, longitude }, dispatch] = useStateValue();
  const [loadedMap, setLoadedMap] = React.useState(false);
  const [randomBackgroundColor, setRandomBackgroundColor] = React.useState(randomColor());
  const [history, setHistory] = React.useState({});

  const updateSelectedCity = (data) => {
    // Whenever some city data is fetch, the state gets updated.
    dispatch({
      type: "updateLocation",
      payload: {
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        locationData: {
          weather: data.weather,
          main: data.main,
          wind: data.wind,
          clouds: data.clouds,
          sys: data.sys,
          timezone: data.timezone,
          name: data.name,
          cod: data.cod
        }
      }
    });
    setRandomBackgroundColor(randomColor());
    updateHistory(data.name)
      .then(result => {
        setHistory(result);
      });
  };

  React.useEffect(() => {
    if (loadedMap) {
      fetchLocationDataByCoords(latitude, longitude)
        .then(result => {
          updateSelectedCity(result);
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  }, [loadedMap]);

  const handleSearchByText = (text) => {
    // This is mostly used for showing the loading state. We clear the data so the loading component is rendered.
    dispatch({
      type: "clearLocationData"
    });
    fetchLocationDataByCityName(text)
      .then(result => {
        updateSelectedCity(result);
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          Alert.alert('Please enter a valid city.');
        } else {
          Alert.alert(error);
        }
      })
  }

  return (
    <>
      <SafeAreaView style={{ ...styles.container, backgroundColor: randomBackgroundColor }}>
        <Input handleSubmit={text => handleSearchByText(text)} />
        <Map setLoadedMap={setLoadedMap} />
        <Data />
        <History items={history} handleSearch={(text) => handleSearchByText(text)}/>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    height: '100%'
  }
});

export default Main;