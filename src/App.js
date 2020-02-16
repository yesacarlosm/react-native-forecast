import React from 'react';
import { StateProvider, initialState, reducer } from './StateContextProvider';
import Main from './components/Main';

const App: () => React$Node = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
};

export default App;
