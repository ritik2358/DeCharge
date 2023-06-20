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
        </div>
      </div>
    </div>
  )
}

export default Header