import PropTypes from "prop-types";
import HouseList from "../../House/HouseList";

const SomeHouseList = ({ someHouseData }) => {
  return (
    <div className="mt-20">
      <HouseList HouseData={someHouseData} type={"SomeHouse"} />
    </div>
  );
};

SomeHouseList.propTypes = {
  someHouseData: PropTypes.array,
};

export default SomeHouseList;
