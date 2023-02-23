import React from "react";

//import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

//import icons
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <div className="mt-8 px-[40px] h-[70px] max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-16 lg:shadow-1 bg-white rounded-full items-center shadow-lg">
      <CountryDropdown />
      <div className="w-[1px] h-12 bg-primaryC"></div>
      <PropertyDropdown />
      <div className="w-[1px] h-12 bg-primaryC"></div>
      <PriceRangeDropdown />
      <button className=" bg-secondaryC hover:bg-primaryC transition w-full lg:max-w-[130px] h-12 rounded-3xl flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
