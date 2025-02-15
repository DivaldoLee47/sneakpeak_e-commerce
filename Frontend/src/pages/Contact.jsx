import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => (
  <div className="text-center text-2xl pt-10 mt-14 border-t bg-gray-50 py-16 px-6 md:px-20">
    <Title text1="CONTACT" text2="US" />

    <div className="my-10 flex flex-col md:flex-row gap-12 items-center justify-center">
      <img
        className="w-full md:max-w-[450px] rounded-lg shadow-lg"
        src={assets.contact_img}
        alt="Contact"
      />
      <div className="flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-lg shadow-md w-full md:max-w-[500px]">
        <h3 className="font-bold text-2xl text-gray-800">Our Store</h3>
        <p className="text-gray-600 leading-relaxed">123 Sneaker Street <br /> Suite 500, New York, USA</p>
        <p className="text-gray-600 leading-relaxed">Tel: (415) 555-6789 <br /> Email: support@sneakpeak.com</p>
        <h3 className="font-bold text-2xl text-gray-800">Careers at SneakPeak</h3>
        <p className="text-gray-600 leading-relaxed">
          Join our team and help shape the future of sneaker culture.
        </p>
        <button className="bg-black text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-gray-800 transition-all duration-300">
          Join Us
        </button>
      </div>
    </div>

    <NewsletterBox />
  </div>
);

export default Contact;
