import React from 'react';
import Bus from "../Pictures/Bus.png";

 function Footer() {
  return (
    <footer className="text-center bg-gray-200 text-gray-600">
      <div className="sm:mx-10 sm:py-10 mx-3 py-3 text-center md:text-left">
        <div className="grid grid-1 lg:grid-cols-5 gap-4">
          <div>
            <div className='flex gap-2 items-center'>
              <img alt="reserveLogo"  className='pb-1 sm:w-[37px] w-[25px] h-[25px] items-stretch sm:h-10 rounded-md' src={Bus}/>
              <h3 className="sm:text-3xl text-md text-[#48b3b4]  font-bold mb-2 sm:mb-4">
                ReserveBus
              </h3>
            </div>
            <p className='text-xs sm:text-base'>When you have a choice. Choose ReserveBus</p>
            <p className="text-xs sm:text-base sm:py-2">
              ReserveBus offers bus tickets booking through its website,ios and
              android mobile apps for all major cities.
            </p>
            <p className="text-xs sm:text-base sm:py-2">reserve.bus@reserve.com</p>
          </div>
          <div></div>
          <div>
            <h6 className="uppercase font-bold sm:mb-4 flex justify-center sm:text-[20px] text-[12px] md:justify-start">
              About
            </h6>
            <div className="flex gap-2 justify-center sm:flex-col">
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">About us</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Contact us</a>
            </div>
          </div>
          <div>
            <h6 className="uppercase font-bold sm:mb-4 flex justify-center sm:text-[20px] text-[12px] md:justify-start">
              Useful links
            </h6>
            <div className="flex gap-2 justify-center sm:flex-col">
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Careers</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">FAQ</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">T & C</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Privacy Policy</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Blog</a>
            </div>
          </div>
          <div className="">
            <h6 className="uppercase font-bold sm:mb-4 flex justify-center sm:text-[20px] text-[12px] md:justify-start">
              Follow us
            </h6>
            <div className="flex gap-2 justify-center sm:flex-col">
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Instagram</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base sm:mb-2">Twitter</a>
              <a href="#!" className="text-gray-600 text-xs sm:text-base">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 sm:mx-auto dark:border-gray-700 " />
      <div className="text-center sm:text-[20px] text-[12px] sm:p-3 p-1 font-semibold bg-gray-200">
          All rights reserved - 2023
      </div>
    </footer>
  )
}

export default Footer;