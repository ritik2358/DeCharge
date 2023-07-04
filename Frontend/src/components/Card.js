import { useState } from "react";
//import { Link } from "react-router-dom";
import im2 from "../images/ev1.jpg";
//import { ethers } from 'ethers';
//import abi2 from '../contractJSON/ChargingBooking.json';

export function Card({ Name, Location, Price, Description , handleBookNowClick}) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showDialog, setShowDialog] = useState(false);


  return (
    <>
      <div className="min-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-full">
        <img
          className="object-cover object-center w-full h-40"
          src={im2}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">{Name}</h1>

          <p className="py-2 text-black-800">{Description}</p>

          <div className="flex items-center mt-4 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#008000"
              viewBox="0 0 24 24"
              width="14"
              height="14"
            >
              {/* SVG path */}
            </svg>

            <h1 className="px-2 text-sm text-green-600">{Location}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700">
            <svg
              className="w-6 h-6 fill-current text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
            <h1 className="px-2 text-sm text-green-600">{Price}</h1>
          </div>

           {/* Add start time input */}
           <div className="mt-4">
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          
          {/* Add end time input */}
          <div className="mt-4">
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          
          <div className="float-right pb-9 my-4">
            <button
              type="button"
              className="inline-flex items-center justify-right h-12 px-3 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-400 focus:shadow-outline focus:outline-none"
              onClick={handleBookNowClick}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
}
