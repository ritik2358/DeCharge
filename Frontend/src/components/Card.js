import { useState } from "react";
//import { Link } from "react-router-dom";
import im2 from "../images/ev1.jpg";
//import { ethers } from 'ethers';
//import abi2 from '../contractJSON/ChargingBooking.json';

export function Card({ Name, Location, Price, Description }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleBookNowClick = () => {
    setShowDialog(true);
  };

  const handleConfirmBooking = () => {
    // Perform the booking logic here
    // You can use the startTime and endTime values in your smart contract interaction

    // Reset the inputs and close the dialogue box
    setStartTime("");
    setEndTime("");
    setShowDialog(false);
  };

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

          <div className="float-right pb-9">
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

      {showDialog && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Booking Time
            </h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Start Time (24-hour format)"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="End Time (24-hour format)"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
