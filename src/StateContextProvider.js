import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();

export const initialState = {
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        user: action.payload.user,
        verifiedCredentials: action.payload.verifiedCredentials
      };
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