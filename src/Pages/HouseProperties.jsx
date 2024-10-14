import { useEffect, useState } from "react";
import { IoLogoUsd } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router-dom";

const HouseProperties = () => {
  const Data = useLoaderData();
  const { houseId } = useParams();
  const [houseData, SetHouseData] = useState({});

  useEffect(() => {
    SetHouseData(Data.find((data) => data.id === Number(houseId)));
  }, [Data, houseId]);

  if (!(Data.length >= houseId)) {
    return (
      <div className="text-center">
        <h1 className="flex justify-center items-center h-52 mt-14 text-4xl font-bold text-red-700">
          No data is found
        </h1>{" "}
        <Link to={-1}>
          <button className="btn btn-outline btn-success">Go beck</button>
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

  if (houseId === undefined) {
    return (
      <div className="text-center">
        <h1 className="flex justify-center items-center h-52 mt-14 text-4xl font-bold text-red-700">
          Data base problem
        </h1>{" "}
        <Link to={-1}>
          <button className="btn btn-outline btn-success">Go beck</button>
        </Link>
      </div>
    );
  }
  console.log(houseData);
  return (
    <div>
      <div className="mt-32  text-center grid justify-center gap-7 mb-[150px] mx-2">
        <h1 className="text-3xl lg:text-5xl font-bold"> {segment_name}</h1>
        <div className=" m-auto md:w-[800px] lg:w-[1150px]  bg-slate-400">
          <img
            src={img}
            alt="House img!!!"
            className="w-full md:h-[400px] lg:h-[600px]"
          />
        </div>
        <div className="text-left grid gap-6">
          <h1 className="text-3xl lg:text-5xl font-bold">House No. {id}</h1>
          <hr className="border-dashed" />
          <p> {small_description} </p>
          <hr className="border-dashed" />
          <p> {big_description} </p>
          <hr />
          <p>
            Idle for <span className="font-bold">{type}</span>
          </p>
          <hr />
          <div>
            <div className="grid gap-2 w-[400px]">
              <p className="flex justify-between ">
                <span>Total rooms:</span>{" "}
                <span className="font-bold">{totalRooms}</span>
              </p>
              <p className="flex justify-between ">
                <span>Total Bed rooms:</span>{" "}
                <span className="font-bold">{bedrooms}</span>
              </p>
              <p className="flex justify-between ">
                <span>Total Bath rooms:</span>{" "}
                <span className="font-bold">{bathrooms}</span>
              </p>
              <p className="flex justify-between ">
                <span>Square Footage:</span>{" "}
                <span className="font-bold">
                  {squareFootage ? squareFootage : "-"}
                </span>
              </p>
              <p className="flex justify-between ">
                <span>Build Date:</span>{" "}
                <span className="font-bold">{buildDate}</span>
              </p>
              <p className="flex justify-between ">
                <span>Available From:</span>{" "}
                <span className="font-bold">{availableFrom}</span>
              </p>
              <p className="flex justify-between ">
                <span>Rent:</span>{" "}
                <span className="font-bold">
                  {rent ? (
                    <>
                      <div className="flex items-center justify-end ">
                        <p>{rent}</p>
                        <IoLogoUsd size={14} />
                      </div>
                    </>
                  ) : (
                    "-"
                  )}
                </span>
              </p>
            </div>
            <p className="flex justify-between w-1/3 text-xl items-center mt-3">
              Services:{" "}
              <span className="flex gap-2 text-xl ">
                {services__electricity && (
                  <span className=" badge badge-success text-white gap-2">
                    Electricity
                  </span>
                )}
                {services__gas && (
                  <span className=" badge badge-success text-white  gap-2">
                    Gas
                  </span>
                )}
                {services__water && (
                  <span className=" badge badge-success text-white gap-2">
                    Water
                  </span>
                )}
                {services__internet && (
                  <span className=" badge badge-success text-white gap-2">
                    Internet
                  </span>
                )}
              </span>
            </p>
          </div>
          <hr className="border-dashed" />
          <p className="text-lg ">
            {" "}
            Location/Address:{" "}
            <span className="font-bold">{location__address}</span>
          </p>
          <hr className="border-dashed" />
          <div className="flex gap-4">
            <button>
              <Link
                to={"bookNow"}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-success rounded-md group-hover:mt-0 group-hover:ml-0" />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md " />
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-success rounded-md opacity-0 group-hover:opacity-100 " />
                <span className="relative text-success transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold">
                  Book Now
                </span>
              </Link>
            </button>
            <button>
              <spam className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-info rounded-md group-hover:mt-0 group-hover:ml-0" />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md " />
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-info rounded-md opacity-0 group-hover:opacity-100 " />
                <span className="relative text-info transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold">
                  Compare
                </span>
              </spam>
            </button>
            <button>
              <Link
                to={-1}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-info rounded-md group-hover:mt-0 group-hover:ml-0" />
                <span className="absolute inset-0 w-full h-full bg-slate-200 rounded-md " />
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-info rounded-md opacity-0 group-hover:opacity-100 " />
                <span className="relative text-info transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-bold">
                  Go Beck
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
