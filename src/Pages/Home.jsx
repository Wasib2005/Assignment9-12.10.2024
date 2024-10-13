import { useLoaderData } from "react-router-dom";
import Banners from "../Components/Others/BannersComponent/Banners";

const Home = () => {
    const houseData =useLoaderData()
    return (
        <div>
            <Banners houseData={houseData}/>
        </div>
    );
};

export default Home;