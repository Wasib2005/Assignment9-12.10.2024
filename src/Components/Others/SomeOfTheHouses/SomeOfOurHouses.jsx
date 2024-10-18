import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getRandomItem } from "../../../utilities/GetRandomItem";
import SomeHouseList from "./SomeHouseList";
import { NavLink } from "react-router-dom";

const SomeOfOurHouses = ({ houseData }) => {
  const [someHouseData, setSomeHouseData] = useState([]);
  useEffect(() => {
    setSomeHouseData(getRandomItem(houseData, 6));
  }, [houseData]);
  return (
    <div className="">
      <div className="text-center mt-20 lg:mt-44">
        <h1 className=" text-xl lg:text-6xl font-bold">Some of Our Houses</h1>
      </div>
      <SomeHouseList someHouseData={someHouseData} />
      <div className="text-center mt-6 mb-[100px]">
        <button>
          <NavLink
            to={"/rentPlaces/all"}
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-success opacity-[3%]" />
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-success opacity-100 group-hover:-translate-x-8" />
            <span className="relative w-full text-left text-success transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              See all
            </span>
            <span className="absolute inset-0 border-2 border-success rounded-full" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

SomeOfOurHouses.propTypes = {
  houseData: PropTypes.array,
};
export default SomeOfOurHouses;
