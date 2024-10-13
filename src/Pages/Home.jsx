import { useLoaderData } from "react-router-dom";
import Banners from "../Components/Others/Banners";
import SomeHomes from "../Components/Others/SomeHomes";
import { useContext, useEffect } from "react";
import { DataContext } from "../Context/CommonContext";

const Home = () => {
  const data = useLoaderData();

  const { setHouseData } = useContext(DataContext);
  useEffect(() => setHouseData(data), [data, setHouseData]);

  return (
    <div>
      <Banners />
      <SomeHomes />
    </div>
  );
};

export default Home;
