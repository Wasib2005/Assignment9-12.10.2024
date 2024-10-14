import PropTypes from "prop-types";
import HouseCard from "./HouseCard";

const HouseList = ({ HouseData }) => {

  return (
    <div className="m-auto flex flex-col flex-1 md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:gap-10 w-[500px] md:w-[800px] lg:w-full">
      {HouseData.length === 0 ? (
        <p>No data</p>
      ) : (
        HouseData.map((house, i) => <HouseCard key={i} house={house} />)
      )}
    </div>
  );
};

HouseList.propTypes = {
  HouseData: PropTypes.array,
  type: PropTypes.string,
};

export default HouseList;
