import React from "react";
import UserForm from './UserForm'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {loadStripe} from '@stripe/stripe-js';
import 'react-toastify/dist/ReactToastify.css';

const Information = () => {
  const navigate = useNavigate();
  let formattedDate, totalPrice;
  let userDetails=useSelector((x)=>x.userDetails.INIT_STATE);
  console.log(userDetails);
  let fromTo = useSelector((state) => state.fromTo.INIT_STATE);
  console.log(fromTo );
  let seatData = useSelector((x) => x.seatData.INIT_STATE);
  console.log(seatData);

  if (fromTo && seatData) {
    const date = new Date(fromTo.Date);
    formattedDate = date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
    totalPrice = Number(seatData.selectedBusCard.busFare) * Number(seatData.selectedSeat.length);
  }

  async function handleFinalSubmit(){
  const stripe = await loadStripe(
    "pk_test_51OOtzRSB3JGtnuUYU1cUgFau0jkk8MkOpp0bn4qs9leHsUAyrPIyZPlYTktPSrL4oCAc3bbh4gX5PumiJtslvAgm00dH0VQrne"
  );

  // const { name } = userDetails;
  // const { From, To } = fromTo;
  // const { busName, busFare }= seatData;
  // const body = {
  //   savedBooking:{
  //     userDetails: { name },
  //     fromTo: { From, To },
  //     seatData:{ busName, busFare },
  //   },
  // };
  const body = {
    savedBooking:{
      userDetails,
      fromTo,
      seatData,
    },
  };

  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(
    "http://localhost:5001/tickets",
    {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    }
  );

  const session = await response.json();
  console.log("36");
  const result = stripe.redirectToCheckout({
    sessionId: session.id,
  });

  console.log("41");

  console.log("44");
  if (result.error) {
    console.log(result.error);
  }

  // Resolve the promise once the payment process is completed
  return result;
}

  return (
    <>
      {fromTo && seatData ?
        <div className="flex md:flex-row flex-col p-5 gap-5">
          <div>
            <div className="flex sm:h-44 h-30 sm:mt-4 sm:ml-16 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)] w-[85vw] sm:w-[65vw]">
              <div className="flex flex-col justify-between sm:w-[950px] w-[300px] p-2 sm:p-5 ">
                <div className="flex flex-col sm:gap-2.5">
                  <div className="flex gap-2.5">
                    <h3 className="font-bold sm:text-xl text-sm">{seatData.selectedBusCard.busName}</h3>
                    <p className='bg-green-500 sm:text-sm text-[5px] rounded-md sm:px-1 px-0.5 self-center pb-0 text-white'>⭐{seatData.selectedBusCard.rating}</p>
                    <h1 className='text-slate-400 self-center  sm:text-sm text-[7px]'>ratings</h1>
                  </div>
                  <div className='flex sm:gap-4 gap-1'>
                    <h1 className='sm:text-sm text-[9px] self-center text-slate-600'>{seatData.selectedBusCard.category}</h1>|
                    <h1 className='sm:text-sm text-[9px] self-center text-slate-600'>{seatData.selectedBusCard.totalSeats} Seats Left </h1>|
                    <h1 className='sm:text-sm text-[9px] self-center text-slate-600'>{seatData.selectedBusCard.totalWindowSeatsAvailable} Windows seat</h1>
                  </div>
                  <div className='flex sm:gap-4 gap-1'>
                    <h1 className='sm:text-lg text-[9px] font-semibold self-center text-slate-700'>{seatData.selectedBusCard.startTime}, {formattedDate}</h1>---
                    <h1 className='sm:text-sm text-[8px] font-semibold self-center text-slate-500'>06 hrs 30 min</h1>---
                    <h1 className='sm:text-lg text-[9px] font-semibold self-center text-slate-700'>{seatData.selectedBusCard.EndTime}, {formattedDate}</h1>
                  </div>
                  <div className="flex sm:gap-52 gap-10">
                    <p className="sm:text-lg text-[9px] font-semibold">From: {fromTo.From}</p>
                    <p className="sm:text-lg text-[9px] font-semibold">To: {fromTo.To}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------- */}
            <UserForm seats={seatData}/>
            {/* ---------------------------------- */}

          </div>
          <div className="flex sm:ml-10 m-0 flex-col gap-2 sm:gap-4 h-full lg:w-[20vw] w-[85vw] mt-4 p-4 mr-10 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)]">
            <h2 className="font-bold text-[large]">Fare Details</h2>
            <div className="flex justify-between">
              <p>Base Fare</p>
              <h2 className="font-semibold">₹ {totalPrice}</h2>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <h2 className="font-semibold">₹ {Math.floor(totalPrice * 0.28)}</h2>
            </div>
            <div className="flex justify-between">
              <p>Offer Applid</p>
              <h2 className="font-semibold">₹ 100</h2>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total Amount</p>
              <h2 className="font-semibold">₹ {Math.floor(totalPrice + totalPrice * 0.28 - 100)}</h2>
            </div>
            {userDetails?
            <button onClick={() => handleFinalSubmit()} className="bg-[#48b3b4] hover:scale-105 h-[35px] mx-2 text-[white] rounded-[5px]">
            Proceed To Payment
            </button>
            :
            <button onClick={() => toast.info('Please Fill Passenger Details First', {position: "top-right",autoClose: 3000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light"})} className="bg-[#48b3b4] hover:scale-105 h-[35px] mx-2 text-[white] rounded-[5px]">
              Proceed To Payment
            </button>
            }
          </div>
        </div>
        :
        <h1 className='flex justify-center py-4'>No data Found!! <p className='text-blue-600'><Link to="/">Click here</Link></p></h1>
      }
      <ToastContainer />
    </>
  );
};

export default Information;