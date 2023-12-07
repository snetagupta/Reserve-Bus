import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setBusData } from '../Redux/action/busData';
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import SeatDetail from "../Components/SeatDetail";
import Select from "react-select";


export default function Buses() {
  const [isLoading, setIsLoading] = useState(true);
  const[selectedCardIndex,setSelectedCardIndex]=useState(null);
  const[selectedCardData,setSelectedCardData]=useState(null);
  const [showSeatDetails, setShowSeatDetails] = useState(false);
  const dispatch = useDispatch();
  const handleCardDetailsClick = (index,card) => {setSelectedCardIndex(index);setSelectedCardData(card);setShowSeatDetails(!showSeatDetails)};
  // const fromTo = useSelector((state) => state.fromTo); //Get from,to values of SearchInput from redux Store.
  let busData=useSelector((x)=>x.busData.INIT_STATE);
  useEffect(() => {
    const fetchData = async () => {
      // const myData = {From: fromTo.INIT_STATE.From,To: fromTo.INIT_STATE.To};
      // const queryString = new URLSearchParams(myData).toString();
      // const buses = await fetch(`https://reserve-bus-booking-app.vercel.app/busData?${queryString}`)
      //here i am asking all trips,user selected cities will not matter..
        try{
          setIsLoading(true);
          // let buses=await fetch("https://reserve-bus-booking.vercel.app/trips")
          let buses=await fetch("http://localhost:5001/get")
          .then((response) => response.json())
          .then((data) => data)
          .catch((error) => console.error(error));
          await setBusData(dispatch,buses);
        }finally{setIsLoading(false)};
      };
    fetchData();
  },[]);
    const objectArray = [
        {
          label: (
            <label>
              <input type="checkbox" onChange={() =>{}} />
              <span style={{ paddingLeft: "15px" }}>Neon Bus</span>
            </label>
          ),
          value: "Neon Bus",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>Vector Bus</span>
            </label>
          ),
          value: "vestor Bus",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>Honda Bus</span>
            </label>
          ),
          value: "honda Bus",
        },
      ];
    
      const aquaticCreatures = [
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>Indore</span>
            </label>
          ),
          value: "Indore",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>Pune</span>
            </label>
          ),
          value: "Pune",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>Bangalore</span>
            </label>
          ),
          value: "Bangalore",
        },
      ];
      const rating = [
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>4 star or more</span>
            </label>
          ),
          value: "4+",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>3 star or more</span>
            </label>
          ),
          value: "3+",
        },
        {
          label: (
            <label>
              <input type="checkbox" onChange={() => {}} />
              <span style={{ paddingLeft: "15px" }}>2 to 3 star or more</span>
            </label>
          ).key,
          value: "2 to 3",
        },
      ];
    return (
            <>
                <NavBar />
                    <div className="mani_div">
                        <div className="flex">
                            <div className=" lg:flex  hidden mt-6 m-4 w-0 lg:w-1/4">
                                <div className="w-full">
                                    <div className="flex px-4  border-2 rounded-md mb-3 border-slate-500 justify-between items-center p-1">
                                        <h4 className='text-md font-semibold'>Filter</h4>
                                        <h4 className='text-md font-semibold'>Clear All</h4>
                                    </div>
                                    <div className="flex  px-4 border-2 rounded-md p-2 border-slate-500 flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Departure Time</h4>
                                            <div className="flex items-center">
                                                <input type="checkbox" value="Moining Session" />
                                                <span className="pl-2">Morning Session</span>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" value="Afternoon Session" />
                                                <span className="pl-2">Afternoon Session</span>
                                            </div>
                                            <div className="flex border-b-2 pb-4 border-slate-400 items-center">
                                                <input type="checkbox" value="Evening Session" />
                                                <span className="pl-2">Evening Session</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Arrival Time</h4>
                                            <div className="flex items-center">
                                                <input type="checkbox" value="Moining Session" />
                                                <span className="pl-2">Morning Session</span>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" value="Afternoon Session" />
                                                <span className="pl-2">Afternoon Session</span>
                                            </div>
                                            <div className="flex border-b-2 pb-4 border-slate-400 items-center">
                                                <input type="checkbox" value="Evening Session" />
                                                <span className="pl-2">Evening Session</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Pickup Point</h4>
                                            <div> <Select options={aquaticCreatures} /> </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Drop Point</h4>
                                            <div> <Select options={aquaticCreatures} /> </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Bus Rating</h4>
                                            <div> <Select options={rating} /> </div>
                                        </div>
                                        <div className="flex  border-b-2 pb-4 border-slate-400  flex-col gap-2">
                                            <h4 className='text-md font-semibold'>Bus Operator</h4>
                                            <div> <Select options={objectArray} /> </div>
                                        </div>
                                        <div>
                                            <button className='font-semibold border-2 border-white hover:border-teal-900 text-white bg-[#48b3b4]  font-mono px-6 p-1'>Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-3/4">
                                <div className="w-full sm:p-4 p-1">
                                    {isLoading===false && Array.isArray(busData) ? 
                                    <div>
                                    {busData.map((card,index)=>{
                                     return (<div key={index}>
                                     <Card  data={card} onDetailsClick={() =>{handleCardDetailsClick(index,card)}}/>
                                     {selectedCardIndex === index && showSeatDetails && <SeatDetail data={selectedCardData}/>}
                                     </div>)
                                    })}
                                  </div>:<h1 className='text-3xl pt-20 text-center font-serif font-bold'>Please Wait,Fetching data from database...</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
    )
}
