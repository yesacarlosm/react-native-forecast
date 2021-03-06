import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();

export const initialState = {
  latitude: 37.78825,
  longitude: -122.4324,
  locationData: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'fetchUserLocation':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    case 'updateLocation':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        locationData: action.payload.locationData
      };
    case 'clearLocationData':
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);