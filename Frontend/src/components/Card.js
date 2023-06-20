import { Link } from "react-router-dom";
import im2 from "../images/ev1.jpg";

export function Card({ Name, Location, Price, Description }) {
  return (
    <>
      <div className="min-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-full">
        <img
          className="object-cover object-center w-full h-40"
          src={im2}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">{Name}</h1>

          <p className="py-2 text-black-800">{Description}</p>

          <div className="flex items-center mt-4 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#008000"
              viewBox="0 0 24 24"
              width="14"
              height="14"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12c0 4.294 2.843 9.13 7.185 15.477.319.484.815.764 1.331.764s1.012-.28 1.331-.764C19.157 21.13 22 16.294 22 12c0-5.514-4.486-10-10-10zm0 18.25C7.925 20.25 4.25 16.575 4.25 12S7.925 3.75 12 3.75 19.75 7.425 19.75 12 16.075 20.25 12 20.25z" />
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
            </svg>

            <h1 className="px-2 text-sm text-green-600">{Location}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700">
            <svg
              className="w-6 h-6 fill-current text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 19.2C8.26766 19.2 5.2 16.1323 5.2 12C5.2 7.86768 8.26766 4.8 12 4.8C15.7323 4.8 18.8 7.86768 18.8 12C18.8 16.1323 15.7323 19.2 12 19.2ZM12 7.2C9.52283 7.2 7.6 9.12283 7.6 11.6C7.6 14.0772 9.52283 16 12 16C14.4772 16 16.4 14.0772 16.4 11.6C16.4 9.12283 14.4772 7.2 12 7.2ZM11 13.2H10V14.4H11V13.2ZM13 13.2H12V14.4H13V13.2ZM13 10.2H11V12.6H13V10.2Z"
              />
            </svg>
            <h1 className="px-2 text-sm text-green-600">{Price}</h1>
          </div>

          <div className="float-right pb-9">
            <button
              type="submit"
              className="inline-flex items-center justify-right h-12 px-3 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <Link to="/">Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
