import PropTypes from "prop-types";
import HouseCard from "./HouseCard";

const HouseList = ({ HouseData, type }) => {
  return (
    <div>
      {HouseData.map((e, i) => (
        <HouseCard key={{type,i}} />
      ))}
    </div>
  );
};

HouseList.propTypes = {
  HouseData: PropTypes.array,
  type: PropTypes.string,
};

export default HouseList;
