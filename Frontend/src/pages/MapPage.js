
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Map } from "../components/map/Map";
import datas from './data.json'



export function GoogleMap() {

    // const { t } = useTranslation();

    const [coordinates, setCoordinates] = useState({});

    const [click, setClick] = useState(1);
    const data = datas.Operators;


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, []);


    useEffect(() => {
        console.log(click);
        const k = document.getElementById(click);
        console.log(k);
        const s = document.getElementById('scroll');
        s.scrollTop = k.offsetTop - 250;
        // console.log(s);

    }, [click])


    return (<>
        <section className="text-gray-600 body-font relative ">
            <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap ">
                <div className="lg:w-2/3 md:w-1/2  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 relative h-screen w-full md:mt-20">
                    <Map
                        coordinates={coordinates}
                        data={data}
                        setClick={setClick}
                    />
                </div>
                <div className="lg:w-1/3 md:w-1/2 sm:w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
                    <div className="relative mb-4">
                        <h1 className="text-slate-900 font-semibold uppercase text-2xl">Operators</h1>
                    </div>
                    <div className="relative mb-4">
                        <h1 className="text-slate-600 font-semibold text">List of operators near you</h1>
                    </div>
                    <div className="relative mb-4">
                        <form class="w-full max-w-lg">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <div className="flex items-center border-b hover:border-amber-600 group-focus:border-amber-600 py-2">
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Someone" aria-label="Full name" required />
                                <button class="flex-shrink-0 bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" flex flex-col overflow-y-scroll scroll-smooth max-h-screen" id="scroll">
                        {
                            data.map((marker, i) =>
                                <div className="relative mb-4 flex flex-grow" id={i}>
                                    <Card Name={marker.name} Contact={marker.contact} Address={marker.address} />
                                </div>
                            )}

                    </div>
                </div>
            </div>
        </section>
    </>
    );
}