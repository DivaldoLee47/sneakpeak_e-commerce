import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
          <div>
            <Link to="/" className="text-2xl font-bold font-poppins">
              SneakPeak.
            </Link>
            <p className="w-full md:w-2/3 text-gray-400 mt-4">
              Elevate your sneaker game with the latest trends. At SneakPeak., we bring you exclusive sneakers and stylish apparel, designed for those who move ahead of the curve.
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Delivery</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>+1-234-567-89</li>
              <li>contact@sneakpeak.com</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600" />
        <p className="py-5 text-center text-gray-500 text-sm">
          © 2024 SneakPeak. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
