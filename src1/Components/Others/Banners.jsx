import Banner from "./Banner";
import { useEffect, useState } from "react";
import { getRandomItem } from "../../utilities/GetRandomItem";

const Banners = ({ houseData }) => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const tempBanners = getRandomItem(houseData, 10);
    setBannerData(tempBanners);
  }, [houseData]);

  return (
    <div className="flex items-center justify-center mt-12 lg:mt-28 ">
      <div className="carousel min-w-[500px] h-[250px] lg:w-[1150px] lg:h-[600px] rounded-3xl m-auto">
        {bannerData.map((banner, i) => (
          <Banner
            key={i}
            banner={banner}
            i={i}
            bannerDataLength={bannerData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Banners;
