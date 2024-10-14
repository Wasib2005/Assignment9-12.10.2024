import PropTypes from "prop-types";
import HouseCard from "./HouseCard";

const HouseList = ({ HouseData, type }) => {
  return (
    <div className="m-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:gap-10 md:w-[800px] lg:w-full">
      {HouseData.map((e, i) => (
        <HouseCard key={{type,i}} house={e} />
      ))}
    </div>
  );
};

HouseList.propTypes = {
  HouseData: PropTypes.array,
  type: PropTypes.string,
};

export default HouseList;
