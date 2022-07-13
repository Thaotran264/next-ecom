import {
  createContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { reducers } from "./reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const initialState = { notify: {}, auth: {}, cart: [], modal: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || {};
    if (Object.keys(data)?.length) {
      dispatch({ type: "ADD_CART", payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <DataContext.Provider value={{ state, dispatch, showModal, setShowModal }}>
      {children}
    </DataContext.Provider>
  );
};
