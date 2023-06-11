import img1 from "./map1.png"
import img2 from "./map2.png"

export const Pricing = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Choose</span>
            </span>{' '}
            your suitable power station.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. */}
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src={img1}
                className="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Hotel Uday Palace</div>
                <p className="text-sm text-gray-900">
                  
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  Rs 200 per hour
                </div>
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book your slot
              </a>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src={img2}
                className="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Sagar Garie platinum plaza</div>
                <p className="text-sm text-gray-900">
                 
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  Rs 150 per hour
                </div>
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Your slot
              </a>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src={img1}
                className="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Dawa Bazar</div>
                <p className="text-sm text-gray-900">
               
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                 Rs 175 per hour
                </div>
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book your slot
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };