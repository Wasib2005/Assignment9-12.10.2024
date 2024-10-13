import { useEffect, useState } from "react";
import { getRandomItem } from "../../utilities/GetRandomItem";
import HousesList from "./HousesList";

const SomeHomes = ({ houseData }) => {
  const [someHouseData, setSomeHouseData] = useState([]);
  useEffect(() => {
    setSomeHouseData(getRandomItem(houseData, 6));
  }, [houseData]);
  return (
    <div className="">
      <div className="text-center mt-20 lg:mt-44">
        <h1 className=" text-xl lg:text-6xl font-bold">Some of Our Houses</h1>
      </div>
      <div>
        <HousesList HouseData={someHouseData} />
      </div>
    </div>
  );
};

export default SomeHomes;
