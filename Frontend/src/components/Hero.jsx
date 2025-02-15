import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border mt-20 border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-2 lg:text-4xl leading-snug">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-2/5 flex justify-center">
        <img className="w-auto h-auto" src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
