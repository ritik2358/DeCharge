import { Link } from "react-router-dom";
import img1 from "../images/ev1.jpg"

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            Revolutionizing Electric Mobility. Our platform connects individuals and businesses, enabling them to share and access charging infrastructure for electric vehicles. With a user-friendly interface, real-time availability, and secure transactions, we're empowering a sustainable future for electric transportation. Join the movement today!"
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              <Link to="/chargers">
                Chargers
              </Link>


            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
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
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              EV Charging, Simplified

            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
              With our platform, we aim to create a seamless and convenient experience for all those who want to switch to electric vehicles, and contribute towards a greener tomorrow. Fleet owners, housing societies, shops, offices, and co-working spaces can now easily manage their charging infrastructure and monitor usage through our user-friendly platform, further promoting sustainability.
            </p>
            {/* <div className="mb-10 text-center md:mb-16 lg:mb-20">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Learn more
              </a>
            </div> */}
            {/* <div className="flex flex-col items-center">
              <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                      <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
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