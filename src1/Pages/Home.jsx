import { useLoaderData } from "react-router-dom";
import Banners from "../Components/Others/Banners";
import SomeHomes from "../Components/Others/SomeHomes";
import { useEffect, useState } from "react";

const Home = () => {
  const tempData = useLoaderData();
  const [houseData, setHouseData] = useState([]);
  useEffect(() => {
    if (houseData.length===0){
      return
    }
    setHouseData(tempData);
  },[tempData]);
  console.log(houseData);
  return (
    <div>
      <div>
        <Banners houseData={houseData} />
      </div>
      <div>
        <SomeHomes houseData={houseData} />
      </div>
    </div>
  );
};

export default Home;
