import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getRandomItem } from "../../../utilities/GetRandomItem";
import SomeHouseList from "./SomeHouseList";

const SomeOfOurHouses = ({ houseData }) => {
  const [someHouseData, setSomeHouseData] = useState([]);
  useEffect(() => {
    setSomeHouseData(getRandomItem(houseData, 6));
  }, [houseData]);
  return (
    <div className="">
      <div className="text-center mt-20 lg:mt-44">
        <h1 className=" text-xl lg:text-6xl font-bold">Some of Our Houses</h1>
      </div>
      <SomeHouseList someHouseData={someHouseData}/>
    </div>
  );
};

SomeOfOurHouses.propTypes = {
  houseData: PropTypes.array,
};
export default SomeOfOurHouses;
