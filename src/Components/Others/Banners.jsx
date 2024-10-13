
import Banner from "./Banner";
import { useContext, useEffect, useState } from "react";
import { getRandomItem } from "../../utilities/GetRandomItem";
import { DataContext } from "../../Context/CommonContext";

const Banners = () => {
  const { HouseData } = useContext(DataContext);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    if (HouseData.length === 0) {
      return;
    }
    const tempBanners = getRandomItem(HouseData, 10);
    setBannerData(tempBanners);
  }, [HouseData]);

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
