import React, { createContext, useContext, useReducer } from 'react';

//Prepare data-layer -> global state 
export const StateContext = createContext();

// provides global state to app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
  </StateContext.Provider>
);

// pull info from global state
export const useStateValue = () => useContext(StateContext);