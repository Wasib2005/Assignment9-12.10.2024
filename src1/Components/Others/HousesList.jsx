import PropTypes from "prop-types";
import HouseCard from "./HouseCard";

const HousesList = ({ HouseData }) => {
  return (
    <div className="">
      {/* <div className="m-auto grid lg:grid-cols-3 gap-5 lg:gap-3 w-[500px]  lg:w-[1200px] mt-5 lg:mt-10 mb-[100px] lg:mb-[200px] justify-center">
        {HouseData.map((houseData, i) => (
          <HouseCard key={`SomeHome${i}`} houseData={houseData} />
        ))}
      </div> */}
    </div>
  );
};

HousesList.propTypes = {
  HouseData: PropTypes.array,
};

export default HousesList;
