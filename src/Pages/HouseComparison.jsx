import { useEffect, useState } from "react";
import { takeFromLS } from "../utilities/LS";
import { Link, useLoaderData } from "react-router-dom";
import RemoveFromHouseComparison from "../Components/RemoveFromHouseComparison";

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

  if (compareData.includes(undefined) || compareData.length <= 1) {
    return (
      <div className="text-center mt-6">
        <h1>No house information has been found in your comparison list (add 2 or more house)</h1>
      </div>
    );
  }
  return (
    <div className="text-center mt-24 grid gap-6 justify-center mb-28">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">{`Here is your ${compareData.length} houses information in one place`}</h1>

      <table className="table-fixed text-left border border-separate border-slate-500 text-white p-2">
        <thead className="border bg-slate-500">
          <tr>
            {compareData.map((house) => (
              <th className="p-2" key={house.id}>
                {" "}
                House No.{house.id}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-400">
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                {house.segment_name}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                {house.small_description || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Total Room: {house.totalRooms || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Total Bed Room: {house.bedrooms || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Total Bath Room: {house.bathrooms || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Square Footage: {house.squareFootage || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Rent: {house.rent || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Build Date: {house.buildDate || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                Available From: {house.availableFrom || "-"}
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                <Link
                  to={`/PlacesProperties/${house.id}`}
                  className="underline underline-offset-2 hover:underline-offset-4"
                >
                  Click here for more information
                </Link>
              </th>
            ))}
          </tr>
          <tr>
            {compareData.map((house) => (
              <th className="  p-2" key={house.id}>
                <RemoveFromHouseComparison
                  houseData={house}
                  compareList={compareList}
                  setCompareList={setCompareList}
                />
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseComparison;
