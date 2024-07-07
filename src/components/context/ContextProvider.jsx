import React, { createContext, useReducer } from "react";
import CartReducer, { initialState } from "./CartReducer";
export const cartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);
  return (
    <cartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextProvider;
