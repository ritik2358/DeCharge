import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { GogMap } from "../components/map/GogMap";
//import datas from './data.json'
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
// import { Link } from "react-router-dom";
import { ethers } from "ethers";
import abinew from "../contractJSON/Booking.json"
import abi from "../contractJSON/ChargerManager.json";


export function GoogleMap() {
  // const { t } = useTranslation();
  const [data, setData] = useState([]);

  const [coordinates, setCoordinates] = useState({});

  const [click, setClick] = useState(1);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Connect to the local Hardhat node
      const provider = new ethers.providers.JsonRpcProvider(
        "http://localhost:8545"
      );

      // Set the contract address and ABI
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = abi.abi;

      // Create a contract instance
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      // Call the contract's function to retrieve the charger count
      const count = await contract.getChargerCount();

      // Retrieve charger details for each charger
      const chargers = [];
      for (let i = 0; i < count.toNumber(); i++) {
        const charger = await contract.getChargerDetails(i);
        chargers.push(charger);
      }

      // Update the state with the retrieved data
      setData(chargers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log(click);
    const k = document.getElementById(click);
    const s = document.getElementById("scroll");

    if (k && s) {
      s.scrollTop = k.offsetTop - 250;
    }
  }, [click]);

  const bookNow = () => {
    console.log('Booking successful!');

  };

 
  return (
    <>
      <div>
          <Nav />
        </div>
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className="lg:w-2/3 md:w-1/2  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 relative h-screen w-full md:mt-20">
            <GogMap coordinates={coordinates} data={data} setClick={setClick} />
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <div className="relative mb-4">
              <h1 className="text-slate-900 font-semibold uppercase text-2xl">
                Chargers
              </h1>
            </div>
            <div className="relative mb-4">
              <h1 className="text-slate-600 font-semibold text">
                List of charger near you
              </h1>
            </div>
            <div className="relative mb-4">
              <form class="w-full max-w-lg">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <div className="flex items-center border-b hover:border-amber-600 group-focus:border-amber-600 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Someone"
                    aria-label="Full name"
                    required
                  />
                  <button
                    class="flex-shrink-0 bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div
              className=" flex flex-col overflow-y-scroll scroll-smooth max-h-screen"
              id="scroll"
            >
              {data.map((charger, index) => (
                <div className="relative mb-4 flex flex-grow" id={index}>
                  <Card
                    Name={charger.name}
                    Location={charger.location}
                    Price={charger.price.toNumber()}
                    Description={charger.description}
                    handleBookNowClick={bookNow}
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
