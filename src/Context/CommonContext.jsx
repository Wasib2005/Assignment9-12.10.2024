import PropTypes from "prop-types";

import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [HouseData, setHouseData] = useState([]);




  return <DataContext.Provider value={  {HouseData,setHouseData}  }> {children} </DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
