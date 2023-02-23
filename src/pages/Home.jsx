import React from "react";
import BackToTopButton from "../components/backToTopButton";

//import components
import Banner from "../components/Banner";
import ItemListContainer from "../components/ItemListContainer";

function Home() {
  return (

    <div className="min-w-screen-lg h-auto flex flex-col">
      <BackToTopButton />
      <Banner />
      <div className='px-24 grid grid-cols-1 md:grid-cols-4 gap-6'>
        <ItemListContainer />
      </div>
  </div> 
  
  );
}

export default Home;
