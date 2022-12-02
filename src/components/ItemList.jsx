import React from "react";
import Item from "./Item";

const Itemlist = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} id={item.id} />)
      ) : (
          <>
            <div className="flex justify-center items-center text-center">
              <p>LOADING</p>
            </div>
        </>
      )}
    </>
  );
};

export default Itemlist;