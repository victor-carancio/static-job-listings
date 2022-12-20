import React, { useState, useContext } from "react";
import { dataJson } from "../data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(dataJson);
  const [filtersData, setFiltersData] = useState();

  return (
    <AppContext.Provider value={{ data, setData, filtersData, setFiltersData }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
