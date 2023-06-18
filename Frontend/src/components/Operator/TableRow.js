import React from 'react'
import { Link } from 'react-router-dom'


function TableRow({ Name, Address, Price, Description }) {
    return (
        <>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="block relative">
                                {/* <img alt="profil" src="/images/person/8.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/> */}
                            </Link>
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {Name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {Address}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {Price}
                    </p>
                </td>
                <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px10 py-1 text-black-900 leading-tight">
                        {/* <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                        </span> */}
                        <span className="relative">
                            {Description}
                        </span>
                    </span>
                </td>
                {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link to="/" className="text-indigo-600 hover:text-indigo-900">
                        {Done}
                    </Link>
                </td> */}
            </tr>

        </>
    )
}

export default TableRow