import { useLoaderData } from "react-router-dom";
import HouseList from "../../House/HouseList";

const RentPlacesAll = () => {
  const houseData = useLoaderData();
  console.log(houseData);
  return (
    <div>
      <div className="mt-14 mb-28 z-[10000]">
        {houseData.length === 0 ? <p></p> : <HouseList HouseData={houseData} />}
      </div>
    </div>
  );
};

export default RentPlacesAll;
