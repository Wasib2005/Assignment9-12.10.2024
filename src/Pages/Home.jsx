import { useLoaderData } from "react-router-dom";
import Banners from "../Components/Others/BannersComponent/Banners";
import SomeOfOurHouses from "../Components/Others/SomeOfTheHouses/SomeOfOurHouses";

const Home = () => {
    const houseData =useLoaderData()
    return (
        <div>
            <Banners houseData={houseData}/>
            <SomeOfOurHouses houseData={houseData}/>
        </div>
    );
};

export default Home;