import React from 'react';
import { FaPlay } from "react-icons/fa";


const VideoTitle = ({title,overview}) => {
  
  return (
    <div className=" w-[vw] aspect-video absolute top-0 left-0 z-10 text-white pt-[18%] px-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6 w-1/3">{overview}</p>
      <div className="flex gap-4">
        <button className=" flex items-center px-6 py-2 bg-white text-black font-semibold rounded">
          <FaPlay />
          <span className='ml-1'>Play</span>
        </button>
        <button className="px-6 py-2 bg-gray-700 bg-opacity-70 text-white font-semibold rounded">Watch More</button>
      </div>
    </div>
  );
};

export default VideoTitle;
