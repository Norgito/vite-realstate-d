import React from "react";

//import components
import Banner from "../components/Banner";
import ItemListContainer from "../components/ItemListContainer";

function Home() {
  return (

    <div className="min-w-screen-lg h-auto flex flex-col">
      <Banner />
      <div className='p-10 grid grid-cols-1 md:grid-cols-4 gap-2'>
        <ItemListContainer />
      </div>
  </div> 
  
  );
}

export default Home;
