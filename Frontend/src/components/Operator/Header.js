import React from 'react'

function Header() {

  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome,
              <br className="hidden md:block" />
              Mr{' '}
              <span className="inline-block text-amber-500">
                Ritik
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              There are 4 Chargers you added.
            </p>
          </div>
          {/* <hr className="mb-6 border-gray-300" /> */}
          {/* <div className="flex">
          <a href="/" aria-label="Play Song" className="mr-3">
            <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
              <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
          <div className="flex flex-col">
            <div className="text-sm font-semibold">
              Rich the kid &amp; Famous Dex
            </div>
            <div className="text-xs text-gray-700">Rich Forever Intro</div>
          </div>
        </div> */}
        </div>
        {/* <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
          <div className="mb-5 font-semibold">Check your reviews</div>
          <div className="flex justify-center w-full mb-3">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <div className="flex items-center">
                <div className="mr-3 font-semibold text-black">
                  Reviews
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex items-center w-full mb-5">
            <hr className="flex-1 border-gray-300" />
            <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
            <hr className="flex-1 border-gray-300" />
          </div>
          <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
            Your overall performance
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
          >
            Performance
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Header