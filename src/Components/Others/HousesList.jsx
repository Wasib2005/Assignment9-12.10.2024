
import PropTypes from "prop-types";
import HouseCard from "./HouseCard";

const HousesList = ({ HouseData}) => {
  return (
    <div>
      <div className="m-auto grid lg:grid-cols-2 gap-8 lg:gap-16 w-[500px] lg:w-[1000px] mt-5 lg:mt-10 mb-[100px] lg:mb-[200px]">
        {HouseData.map((houseData, i) => (
          <HouseCard key={`SomeHome${i}`} houseData={houseData} />
        ))}
      </div>
    </div>
  );
};

HousesList.propTypes = {
    HouseData: PropTypes.object
};

export default HousesList;
