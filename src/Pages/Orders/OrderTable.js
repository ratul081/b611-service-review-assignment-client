import React, { useEffect, useState } from 'react';

const OrderTable = ({ order, handleDeleted }) => {
  const {
    _id,
    service_id,
    service_name,
  } = order;
  const [bookedService, setBookedService] = useState([]);
  useEffect(() => {
    fetch(
      `https://service-review-assignment-server-nine.vercel.app/service/${service_id}`)
      .then((res) => res.json())
      .then((data) => setBookedService(data.data));
  }, [service_id]);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="md:w-32  p-4">
        {bookedService?.image && (
          <img
            className="md:h-28 md:w-28 w-auto h-20 object-cover"
            src={bookedService?.image}
            alt={`${service_name}`}
          />
        )}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xs md:text-lg">
        {service_name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xs md:text-lg">
        <span className='font-bold text-2xl'>৳</span> {bookedService?.price}
      </td>
      <td className="px-6 py-4">
        <button onClick={() => handleDeleted(_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline md:text-lg text-xs">Remove</button>
      </td>
    </tr>
  );
};

export default OrderTable;