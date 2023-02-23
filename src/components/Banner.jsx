import React from "react";

//import image
import Image from "../assets/img/house-banner.png";
import imageMobile from "../assets/img/house-banner-mobile.png";
//import search
import Search from "../components/Search";

const Banner = () => {
  return (
    <>
      {/* DESKTOP*/}
      <section className="">
        <div className="flex-1 lg:flex md:flex md:items-center md:justify-center lg:justify-end lg:items-end">
          <img
            src={imageMobile}
            alt=""
            className="rounded-md items-center justify-center lg:hidden"
          />
        </div>
        <div className="">
          <div className="w-full flex relative items-center justify-center ">
            <p className="absolute z-10 text-center font-bold text-7xl border-2  p-6  text-white drop-shadow-2xl">
              <span className="text-primaryC">BUY</span> or{" "}
              <span className="text-primaryC">RENT</span> <br /> your dream house
              with us
            </p>
            <button className="absolute z-10 text-white bg-secondaryC rounded-2xl w-32 h-10 mt-72">
              Find a Home
            </button>
            <div className="absolute opacity-50 bg-gray-800 w-full h-[240px] blur-lg">
              {" "}
            </div>
            <img src={Image} alt="" className="inset-0" />
          </div>
        </div>
        <Search />
      </section>

      {/* MOBILE*/}
    </>
  );
};

export default Banner;
