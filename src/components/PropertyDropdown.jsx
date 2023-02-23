import React from "react";
import { BsHouseDoor } from "react-icons/bs";

const PropertyDropdown = () => {
  return (
    <>
      <div className="flex flex-row font-semibold">
        <BsHouseDoor size='1.2rem' className="w-6 mx-1 mt-1 " /> Property Type ∨
      </div>
    </>
  );
};

export default PropertyDropdown;
