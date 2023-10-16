import React, { useEffect, useState } from 'react';
import Service from './Service';
import toast from 'react-hot-toast';

export const handelOrder = (id, title, user) => {
  const { displayName, email } = user
  const orderDetails = {
    ordered_person: displayName,
    ordered_persons_email: email,
    service_id: id,
    service_name: title
  }
  fetch("http://localhost:5000/orders", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(orderDetails),
  })
    .then((res) => res.json())
    .then((data) =>
      (data.data.acknowledged) ?
        toast.success("Service added successfully") : toast.error("Something went wrong")
    )
  // console.log(orderDetails);
}

const Services = () => {
  const [serviceData, setServiceData] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);
  useEffect(() => {
    const url = `http://localhost:5000/services?page=${page}&size=${size}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("🚀 ~ file: Home.jsx:26 ~ .then ~ data:", data.data.data)
        setCount(data.data.count);
        setRefresh(true);
        setServiceData(data.data.data);
      });
  }, [page, size]);

  // console.log(`page= ${page} size= ${size} pages= ${pages} data = ${serviceData.length}`);

  // console.log(serviceData);
  return (
    <div className='my-6 mx-12' >
      <p className='my-12 font-bold text-5xl'>Order whatever you like</p>
      {
        (refresh) ?
          <>
            {(serviceData.length === 0) ?
              <p className='text-7xl flex justify-center items-center m-12 h-96'>No data found</p>
              :
              <>
                <div className='lg:mx-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
                  {
                    serviceData.map((service, index) =>
                      <Service
                        key={index}
                        service={service}
                        handelOrder={handelOrder}
                      ></Service>
                    )
                  }
                </div>
              </>
            }
          </>
          :
          <div className="flex justify-center items-center h-96">
            <span className="text-5xl loading loading-spinner loading-lg"></span>
          </div>
      }
      {(serviceData.length !== 0) && (
        <div className="flex flex-row justify-center my-3">
          <div className="join">
            {[...Array(pages).keys()].map((number) => (
              <button
                key={number}
                className="mx-2 text-lg join-item btn"
                onClick={() => setPage(number)}>
                {number + 1}
              </button>
            ))}
          </div>
          <select
            defaultValue={5}
            onChange={(event) => setSize(event.target.value)}
            style={{ appearance: "none" }}
            className="select  border-black">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Services;