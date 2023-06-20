import { Link } from "react-router-dom";
import img1 from "../images/ev1.jpg"

export const Content = () => {
  return (
    <div className="px-4 py-0 mx-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/11678683/pexels-photo-11678683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Decentralized Co-Charging
          </h5>
          <p className="mb-5 text-gray-800">
            Revolutionizing Electric Mobility. Our platform connects individuals and businesses, enabling them to share and access charging infrastructure for electric vehicles. With a user-friendly interface, real-time availability, and secure transactions, we're empowering a sustainable future for electric transportation. Join the movement today!!
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-white hover:text-green-600 hover:border-4 border-green-600 focus:shadow-outline focus:outline-none"
            >
              <Link to="/chargers">
                Chargers
              </Link>


            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-white hover:text-green-600 hover:border-4 border-green-600 focus:shadow-outline focus:outline-none"
            >
              <Link to="/owner">
                Owner
              </Link>

            </button>
            {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-700 hover:text-gray-900"
              >
                Client
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a> */}
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              819
            </h6>
            <p className="mb-2 font-bold text-md">Downloads</p>
            <p className="text-gray-700">
              It’s something that’s many of the wisest people in history have kept
              in mind.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              For many men, the acquisition of wealth does not end their troubles,
              it only changes them.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">91</h6>
            <p className="mb-2 font-bold text-md">Subscribers</p>
            <p className="text-gray-700">
              It's a helluva start, being able to recognize what makes you happy
              today, in this moment.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              Happiness is when what you think, what you say, and what you do are
              in harmony.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col-reverse py-10 pb-0 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-10 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              EV Charging, Simplified

            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
              With our platform, we aim to create a seamless and convenient experience for all those who want to switch to electric vehicles, and contribute towards a greener tomorrow. Fleet owners, housing societies, shops, offices, and co-working spaces can now easily manage their charging infrastructure and monitor usage through our user-friendly platform, further promoting sustainability.
            </p>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            // className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};