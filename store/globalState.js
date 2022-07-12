import {
  createContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { addToCart } from "./actions";
import { reducers } from "./reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || {};
    if (Object.keys(data)?.length) {
      dispatch({ type: "ADD_CART", payload: data });
    }
  }, []);

  useEffect(() => {
    console.log("cart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
