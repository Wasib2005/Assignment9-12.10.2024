import PropTypes from "prop-types";

const HouseShortInformation = ({ house }) => {
  const {
    img,
    small_description,
    id,
    totalRooms,
    type,
    availableFrom,
    location__address,
    segment_name,
    big_description,
    bedrooms,
    bathrooms,
    buildDate,
    squareFootage,
    services__electricity,
    services__gas,
    services__water,
    services__internet,
    rent,
  } = house;

  return (
    <div className="border w-full flex flex-col flex-grow ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{id}</h1>
    </div>
  );
};

HouseShortInformation.propTypes = {
  house: PropTypes.object,
};

export default HouseShortInformation;
