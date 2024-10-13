import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";

const Banners = () => {
  const data = useLoaderData();
  const [bannerData, setBannerData] = useState([]);

  const getRandomItem = (from, howMany) => {
    const max = from.length;
    const randomItems = [];
    for (let index = 0; index < howMany; index++) {
      const element = from[Math.floor(Math.random() * (max - 0 + 1)) + 0];
      randomItems.push(element);
    }
    setBannerData(randomItems);
    console.log(bannerData);
  };

  useEffect(() => {
    getRandomItem(data, 6);
  }, []);

  return (
    <div className="flex items-center justify-center my-32">
      <div className="carousel w-[500px] h-[250px] md:w-[800px] md:h-[400px] lg:w-[1100px] lg:h-[600px] rounded-3xl m-auto">
        {bannerData.map((banner, i) => (
          <Banner key={i} banner={banner} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Banners;