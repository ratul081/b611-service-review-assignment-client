import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, image } = service
  return (
    <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg w-96 object-cover h-80" src={image} alt="product" />
      </div>
      <div className="px-5 pb-5">
        <div >
          <h5 className="my-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        </div>
        <div className='flex justify-center space-x-12'>
          <Link to={`/food/${name}`}>
            <div className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Details
            </div>
          </Link>
          <Link>
            <div className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to orders
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;