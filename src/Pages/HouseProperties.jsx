import { useEffect, useState } from "react";
import { IoLogoUsd } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveToLS, takeFromLS } from "../utilities/LS";
import { toast } from "react-toastify";

const HouseProperties = () => {
  const Data = useLoaderData();
  const { houseId } = useParams();
  const [houseData, setHouseData] = useState({});
  const [compareList, setCompareList] = useState(
    () => takeFromLS("compareList") || []
  );

  useEffect(() => {
    setHouseData(Data.find((data) => data.id === Number(houseId)));
  }, [Data, houseId]);

  const compareHandle = () => {
    if (compareList.includes(houseData.id)) {
      setCompareList(compareList.filter((item) => item !== houseData.id));
      toast.error(` House No. ${id} has been removed from Compare List`);
    } else {
      toast.success(` House No. ${id} has been added from Compare List`);
      setCompareList([...compareList, houseData.id]);
    }
  };

  useEffect(() => {
    if (compareList.length) {
      saveToLS("compareList", compareList);
    }
    if (compareList.length === 0) {
      localStorage.removeItem("compareList");
    }
  }, [compareList]);

  if (!houseData) {
    return (
      <div className="text-center">
        <h1 className="flex justify-center items-center h-52 mt-14 text-4xl font-bold text-red-700">
          No data is found
        </h1>
        <Link to={-1}>
          <button className="btn btn-outline btn-success">Go back</button>
        </Link>
      </div>
    );
  }

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
  } = houseData;

  return (
    <div>
      <div className="mt-32 text-center grid justify-center gap-7 mb-[150px] mx-2">
        <h1 className="text-3xl lg:text-5xl font-bold">{segment_name}</h1>
        <div className="m-auto md:w-[800px] lg:w-[1150px] bg-slate-400">
          <img
            src={img}
            alt="House img!!!"
            className="w-full md:h-[400px] lg:h-[600px]"
          />
        </div>
        <div className="text-left grid gap-6">
          <h1 className="text-3xl lg:text-5xl font-bold">House No. {id}</h1>
          <hr className="border-dashed" />
          <p>{small_description}</p>
          <hr className="border-dashed" />
          <p>{big_description}</p>
          <hr />
          <p>
            Idle for <span className="font-bold">{type}</span>
          </p>
          <hr />
          <div>
            <div className="grid gap-2 w-[400px]">
              <div className="flex justify-between">
                <p>Total rooms:</p> <p className="font-bold">{totalRooms}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Bed rooms:</p> <p className="font-bold">{bedrooms}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Bath rooms:</p>{" "}
                <p className="font-bold">{bathrooms}</p>
              </div>
              <div className="flex justify-between">
                <p>Square Footage:</p>{" "}
                <p className="font-bold">{squareFootage || "-"}</p>
              </div>
              <div className="flex justify-between">
                <p>Build Date:</p> <p className="font-bold">{buildDate}</p>
              </div>
              <div className="flex justify-between">
                <p>Available From:</p>{" "}
                <p className="font-bold">{availableFrom}</p>
              </div>
              <div className="flex justify-between">
                <p>Rent:</p>
                <div className="font-bold">
                  {rent ? (
                    <div className="flex items-center justify-end">
                      <div>{rent}</div>
                      <IoLogoUsd size={14} />
                    </div>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between w-1/3 text-xl items-center mt-3">
              Services:
              <div className="flex gap-2 text-xl">
                {services__electricity && (
                  <p className="badge badge-success text-white gap-2">
                    Electricity
                  </p>
                )}
                {services__gas && (
                  <p className="badge badge-success text-white gap-2">Gas</p>
                )}
                {services__water && (
                  <p className="badge badge-success text-white gap-2">Water</p>
                )}
                {services__internet && (
                  <p className="badge badge-success text-white gap-2">
                    Internet
                  </p>
                )}
              </div>
            </div>
          </div>
          <hr className="border-dashed" />
          <p className="text-lg">
            Location/Address:{" "}
            <span className="font-bold">{location__address}</span>
          </p>
          <hr className="border-dashed" />
          <div className="flex gap-4">
            <button>
              <Link
                to={`/bookNow/house/${id}`}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-success rounded-md group-hover:mt-0 group-hover:ml-0" />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md" />
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-success rounded-md opacity-0 group-hover:opacity-100" />
                <span className="relative text-success transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold">
                  Book Now
                </span>
              </Link>
            </button>
            <button onClick={compareHandle}>
              <span className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                <span
                  className={`absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out ${
                    compareList.includes(id) ? "bg-error" : "bg-info"
                  } rounded-md group-hover:mt-0 group-hover:ml-0`}
                />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md" />
                <span
                  className={`absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 ${
                    compareList.includes(id) ? "bg-error" : "bg-info"
                  } rounded-md opacity-0 group-hover:opacity-100`}
                />
                <span
                  className={`relative ${
                    compareList.includes(id) ? "text-error" : "text-info"
                  } transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold`}
                >
                  {compareList.includes(id)
                    ? "Remove from Compare List"
                    : "Add to Compare List"}
                </span>
              </span>
            </button>
            <button>
              <Link
                to={-1}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-secondary rounded-md group-hover:mt-0 group-hover:ml-0" />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md" />
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-secondary rounded-md opacity-0 group-hover:opacity-100" />
                <span className="relative text-secondary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold">
                  Go Back
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseProperties;
