import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomItem } from "../../utilities/GetRandomItem";
import HousesList from "./HousesList";

const SomeHomes = () => {
  const data = useLoaderData();
  const [someHouseData, setSomeHouseData] = useState([]);
  useEffect(() => {
    setSomeHouseData(getRandomItem(data, 6));
  }, [data]);
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
