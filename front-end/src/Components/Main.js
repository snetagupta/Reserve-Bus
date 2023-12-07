import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFromTo } from "../Redux/action/fromTo";
import Input from "./Input";
import CityState from "../Data/CityState";
import BusPage from "../Pictures/BusPage.jpg";

function Main() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const selectedDate = new Date();
  const [date, setDate] = useState(selectedDate.toISOString().slice(0, 10));
  const dispatch = useDispatch();

  async function handleClick() {
    if (from === "" || to === "") {
      alert("Please fill the given fields");
    }else {await setFromTo(dispatch, {From: from,To: to,Date: date});
  }
    
  }

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to midnight
  const minDate = currentDate.toISOString().split("T")[0];
  return (
    <div
      className="sm:h-[98vh] h-[50vh] bg-cover bg-center flex-col flex items-center"
      style={{
        backgroundImage: `url(${BusPage})`,
      }}
    >
      <div className="flex sm:flex-row flex-col justify-center items-center pt-[5vh] sm:pt-[15vh] h-[65vh] rounded-xl ">
        <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
          <Input setVal={setFrom} data={CityState} placeholder="From" />
        </div>
        <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
          <Input setVal={setTo} data={CityState} placeholder="To" />
        </div>
        <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
          <label className="sm:text-xl text-base font-mono font-medium text-slate-500">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control relative flex-auto min-w-0 block w-[220px] px-3 py-1.5 sm:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Date"
            min={minDate}
          />
        </div>
      </div>
      {from === "" || to === "" ? (
        <button
          onClick={() => alert("Please Fill Details")}
          className="text-white sm:mb-1 mb-5 hover:scale-95 bg-[#48b3b4] mt-12 p-3 sm:text-3xl text-lg rounded-xl sm:px-12 px-4 "
        >
          Search
        </button>
      ) : (
        <Link to="/allBuses">
          <button
            onClick={() => handleClick()}
            className="text-white hover:scale-95 bg-[#48b3b4] sm:mb-1 mb-5 mt-6 p-3 sm:text-3xl text-lg rounded-xl sm:px-12 px-4"
          >
            Search
          </button>
        </Link>
      )}
    </div>
  );
}

export default Main;
