import React from "react";
import { Link } from 'react-router-dom';
import Bus from "../Pictures/Bus.png";

function Navbar(){
   return(
    <div>
    <div className='py-2 sm:px-8 px-1 shadow-md flex justify-between'>
      <ul className='flex sm:gap-10 gap-3'>
        <li className=' flex justify-center font-semibold'>
            <img className='w-[40px] sm:inline-block hidden ' alt='reserveLogo' src={Bus}/>
            <h3 className="text-sm sm:text-2xl text-[#48b3b4] font-bold sm:mb-2 flex items-center justify-center md:justify-start">
              <Link to="/">ReserveBus</Link>
            </h3>
        </li>
        <li className='text-xs sm:text-xl self-center sm:font-medium'><a href="/">Ticket</a></li>
        <li className='text-xs sm:text-xl self-center sm:font-medium'><a href="/">Contact Us</a></li>
      </ul>
      <ul className='flex sm:gap-10 gap-3'>
        <p  className='text-xs cursor-pointer sm:text-2xl sm:font-medium bg-[#48b3b4] text-white rounded-md sm:px-8 px-1 sm:py-1'><Link to="/signin">Login</Link></p>
        <p  className='text-xs cursor-pointer sm:text-2xl self-center sm:font-medium'><Link to="/signup">Register</Link></p>
      </ul>
    </div>
</div>
   ) 
}

export default Navbar;