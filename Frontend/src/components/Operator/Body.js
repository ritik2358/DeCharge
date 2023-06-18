import React from 'react'
import Header from './Header'
import TableRow from './TableRow'
import { Link } from 'react-router-dom'

function Body() {
    return (
        <div>
            <div className='flex'>
                <div className='my-5 px-5'>
                    <Header />
                </div>
                <div className='float-center'>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 mr-8  my-9 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                    >
                        <Link to="/addcharger">
                            Add Charger
                        </Link>


                    </button>
                </div>
            </div>

            <div className="container px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight">
                            Chargers
                        </h2>
                        <div className="text-end">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" placeholder="name" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-amber-600 rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-amber-200" type="submit">
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Address
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Price
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Description
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow Name="ABC" Address={"KS Layout"} Price={"50/hr"} Description="Very Fast Charger" />
                                    <TableRow Name="ABC" Address={"KS Layout"} Price={"50/hr"} Description="Very Fast Charger" />
                                    <TableRow Name="ABC" Address={"KS Layout"} Price={"50/hr"} Description="Very Fast Charger" />
                                    <TableRow Name="ABC" Address={"KS Layout"} Price={"50/hr"} Description="Very Fast Charger" />

                                </tbody>
                            </table>
                            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body