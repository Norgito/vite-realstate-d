import React, { useEffect } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsHouseDoor } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";

const item = ({ item }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-slate-50 border-2 border-slate-200 shadow-1 mt-22 mx-auto rounded-2xl w-full max-w-[352px] h-[520px] cursor-pointer shadow-1.5xl hover:shadow-xl transition mb-5 overflow-hidden "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <img
        className=" scale-150 shadow-md h-[220px] w-min-fit "
        src={item.image}
        alt=""
      />
      <div className="flex items-center justify-center">
        <div className="pb-4 px-4 pt-20 text-xl font-bold max-w-[260px] ">
          {item.name}
        </div>
      </div>

      <div className="my-3 pt-2 px-3 flex text-sm gap-x-2 min-w-full items-center justify-center">
        <SlLocationPin size="1.2rem" />
        <div className="">{item.country}</div>
        <BsHouseDoor size="1.2rem" />
        <div className="">{item.type}</div>
        <div className="font-semibold text-[17px] pl-8">${item.price}</div>
      </div>

      <div className="w-full flex justify-center ">
        <div className=" w-[300px] h-[1px] bg-primaryC"></div>
      </div>

      <div className="items-center justify-center flex gap-x-6 my-3">
        <div className="flex items-center  gap-1">
          <div className=" rounded-full">
            <BiBed size="1.2rem" />
          </div>
          <div className="text-base">{item.bedrooms}</div>
        </div>
        <div className="flex items-center  gap-1">
          <div className=" rounded-full">
            <BiBath size="1.2rem" />
          </div>
          <div className="text-base">{item.bathrooms}</div>
        </div>
        <div className="flex items-center gap-1">
          <div className=" rounded-full">
            <BiArea size="1.2rem" />
          </div>
          <div className="text-base">{item.surface}</div>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className=" w-[220px] h-[1px] bg-primaryC"></div>
      </div>
      <div className="flex justify-center items-center text-center p-4 pb-10">
        <button className=" bg-secondaryC rounded-2xl h-8 w-24 text-white hover:bg-primaryC shadow-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default item;
