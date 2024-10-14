import { useLoaderData, useParams } from "react-router-dom";
import HouseList from "../../House/HouseList";
import { useEffect, useState } from "react";
import { filterAnObjArray } from "../../../utilities/FilterAnObjArray";

const RentPlacesList = () => {
  const { typeId } = useParams();
  console.log(typeId);
  const houseData = useLoaderData();
  const [houseFilteredData, setHouseFilteredData] = useState([]);

  useEffect(() => {
    let tempHouseFilteredData;

    console.log(1, typeId);

    if (typeId === "all") {
      setHouseFilteredData(houseData);
    } else if (typeId === "family") {
      tempHouseFilteredData = filterAnObjArray(houseData, [["type", "Family"]]);
      setHouseFilteredData(tempHouseFilteredData);
    } else if (typeId === "student") {
      console.log(12314);
      tempHouseFilteredData = filterAnObjArray(houseData, [
        ["type", "Student"],
      ]);
      setHouseFilteredData(tempHouseFilteredData);
    } else if (typeId === "single") {
      console.log(12314);
      tempHouseFilteredData = filterAnObjArray(houseData, [["type", "Single"]]);
      setHouseFilteredData(tempHouseFilteredData);
    } else if (typeId === "couple") {
      console.log(12314);
      tempHouseFilteredData = filterAnObjArray(houseData, [["type", "Couple"]]);
      setHouseFilteredData(tempHouseFilteredData);
    } else if (typeId === "SeniorCitizen") {
      console.log(12314);
      tempHouseFilteredData = filterAnObjArray(houseData, [
        ["type", "Senior Citizen"],
      ]);
      setHouseFilteredData(tempHouseFilteredData);
    }

    console.log(2, tempHouseFilteredData);
  }, [houseData, typeId]);
  return (
    <div className="mt-14 mb-28 text-left">
      {" "}
      {houseFilteredData.length === 0 ? (
        <p></p>
      ) : (
        <HouseList HouseData={houseFilteredData} />
      )}
    </div>
  );
};

export default RentPlacesList;
