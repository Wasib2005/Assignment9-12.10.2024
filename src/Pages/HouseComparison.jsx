import { useEffect, useState } from "react";
import { takeFromLS } from "../utilities/LS";
import { useLoaderData } from "react-router-dom";
import HouseShortInformation from "../Components/Others/houseShortInformation";

const HouseComparison = () => {
  const houseData = useLoaderData();
  const [compareList, setCompareList] = useState(
    () => takeFromLS("compareList") || []
  );
  const [compareData, setCompareData] = useState([]);

  useEffect(() => {
    const tempCompareList = [];
    compareList.map((e) =>
      tempCompareList.push(houseData.find((target) => target.id === e))
    );
    setCompareData(tempCompareList);
  }, [compareList, houseData]);
  console.log(compareData.includes(undefined) || compareData.length >= 1);

  if (compareData.includes(undefined) || compareData.length <= 1) {
    return (
      <div className="text-center">
        <h1>No house information has been found in your comparison list</h1>
      </div>
    );
  }
  return (
    <div className="text-center mt-24">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">{`Here is your ${compareData.length} houses information in one place`}</h1>
      <div className="flex flex-grow justify-around">
        {compareData.map((house) => (
          <HouseShortInformation key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default HouseComparison;
