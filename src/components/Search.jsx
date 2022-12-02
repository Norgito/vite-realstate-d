import React from "react";

//import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

//import icons
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <div className="mt-8 px-[30px] h-[70px] max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-16 lg:shadow-1  lg:backdrop-blur rounded-full items-center shadow-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className=" bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[130px] h-12 rounded-3xl flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
