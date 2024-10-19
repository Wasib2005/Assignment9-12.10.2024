import { useLoaderData, useNavigation } from "react-router-dom";
import Banners from "../Components/Others/BannersComponent/Banners";
import SomeOfOurHouses from "../Components/Others/SomeOfTheHouses/SomeOfOurHouses";
import Loader from "../Components/Others/Loader";

const Home = () => {
  const houseData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div>
      <Banners houseData={houseData} />
      <SomeOfOurHouses houseData={houseData} />
    </div>
  );
};

export default Home;
