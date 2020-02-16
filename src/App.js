import React from 'react';
import { StateProvider, initialState, reducer } from './StateContextProvider';
import Main from './components/Main';
navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
};

export default App;
