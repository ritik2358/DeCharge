import { Link } from "react-router-dom";
import im2 from "../images/ev1.jpg"
export function Card({ Name, Address, Price }) {
    return (
        <>

            <div className="min-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-full">
                <img className="object-cover object-center w-full h-40" src={im2} alt="avatar" />


                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 ">{Name}</h1>

                    {/* <p className="py-2 text-gray-700 ">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p> */}

                    {/* <div className="flex items-center mt-4 text-gray-700 ">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
                    </svg>

                    <h1 className="px-2 text-sm">Meraki UI</h1>
                </div> */}

                    <div className="flex items-center mt-4 text-gray-700 ">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                        </svg>

                        <h1 className="px-2 text-sm">{Address}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-70">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 19.2C8.26766 19.2 5.2 16.1323 5.2 12C5.2 7.86768 8.26766 4.8 12 4.8C15.7323 4.8 18.8 7.86768 18.8 12C18.8 16.1323 15.7323 19.2 12 19.2ZM12 7.2C9.52283 7.2 7.6 9.12283 7.6 11.6C7.6 14.0772 9.52283 16 12 16C14.4772 16 16.4 14.0772 16.4 11.6C16.4 9.12283 14.4772 7.2 12 7.2ZM11 13.2H10V14.4H11V13.2ZM13 13.2H12V14.4H13V13.2ZM13 10.2H11V12.6H13V10.2Z" />
                        </svg>

                        <h1 className="px-2 text-sm">{Price}</h1>
                    </div>

                    <div className="float-right pb-9">
                        <button type="submit"
                            className="inline-flex items-center justify-right h-12 px-3 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-400 focus:shadow-outline focus:outline-none"
                        >
                            <Link to="/">
                                Book Now
                            </Link>

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}