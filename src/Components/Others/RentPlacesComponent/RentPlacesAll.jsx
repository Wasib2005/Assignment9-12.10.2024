import { useLoaderData } from "react-router-dom";
import HouseList from "../../House/HouseList";

const RentPlacesAll = () => {
  const houseData = useLoaderData();
  return <div className="mt-14 mb-28"> {houseData.length===0? <p></p>:<HouseList HouseData={houseData}/> }</div>;
};

export default RentPlacesAll;
