import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderTable = ({ order, handleDeleted }) => {
  const {
    _id,
    service_id,
    service_name,
  } = order;
  const [bookedService, setBookedService] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      fetch(
        `http://localhost:5000/service/${service_id}`
      )
        .then((res) => res.json())
        .then((data) => setBookedService(data.data));
    };
    return () => {
      return unsubscribe();
    };
  }, [service_id]);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-32 p-4">
        {bookedService?.image && (
          <img
            className=" h-28 w-28 object-cover"
            src={bookedService?.image}
            alt={`${service_name}`}
          />
        )}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
        {service_name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
        <span className='font-bold text-2xl'>৳</span> {bookedService?.price}
      </td>
      <td className="px-6 py-4">
        <Link onClick={() => handleDeleted(_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline text-lg">Remove</Link>
      </td>
    </tr>
  );
};

export default OrderTable;