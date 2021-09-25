import React, { createContext, useContext } from "react";
import { StoreReducer } from "./Reducer";

const Context = createContext();

const { Provider } = Context;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = StoreReducer({
    history: [],
  });
  return <Provider value={[state, dispatch]} {...props}></Provider>;
};
const useStoreContext = () => useContext(Context);
export { StoreProvider, useStoreContext };
