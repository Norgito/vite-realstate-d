import React from 'react'
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
//import { Link } from "react-router-dom";

const item = ( { item }) => {
  return (

   <div className='bg-slate-100 shadow-1 mt-22 mx-auto p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] cursor-pointer shadow-1.5xl hover:shadow-2xl transition mb-5'>
      <img className='mb-8' src={item.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {item.type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
          {item.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{item.name}</div>
      <div className='text-lg text-red-600 font-semibold max-w-[260px]'>{item.state}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{item.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{item.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{item.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        ${item.price}
      </div>
    </div>
 
  );
};


export default item;