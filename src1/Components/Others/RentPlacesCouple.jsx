import { useContext, useEffect, useState } from "react";
import HousesList from "./HousesList";

import { filterAnObjArray } from "../../utilities/FilterAnObjArray";

const RentPlacesCouple = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    filterAnObjArray(HouseData, ["type", "single"]);
  }, []);

  return <div>{<HousesList HouseData={HouseData} />}</div>;
};

export default RentPlacesCouple;
