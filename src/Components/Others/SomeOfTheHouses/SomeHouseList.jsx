import PropTypes from "prop-types";
import HouseList from "../../House/HouseList";

const SomeHouseList = ({ someHouseData }) => {
  return (
    <div>
      <div>
        <HouseList someHouseData={someHouseData} />
      </div>
    </div>
  );
};

SomeHouseList.propTypes = {
  someHouseData: PropTypes.array,
};

export default SomeHouseList;
