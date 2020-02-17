import Axios from 'axios';
import { OPEN_WEATHER_KEY, OPEN_WEATHER_BASEURL } from 'react-native-dotenv';

export const fetchLocationDataByCityName = (cityName) => {
  return Axios.get(`${OPEN_WEATHER_BASEURL}weather?q=${cityName}&appid=${OPEN_WEATHER_KEY}`)
    .then(result => result.data);
};

export const fetchLocationDataByCoords = (latitude, longitude) => {
  return Axios.get(`${OPEN_WEATHER_BASEURL}weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}`)
    .then(result => result.data);
};