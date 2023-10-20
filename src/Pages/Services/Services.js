import React, { useEffect, useState } from 'react';
import Service from './Service';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

export const handelOrder = (id, title, user) => {
  if (!(user && user.uid)) {
    return alert("Please login first")
  }
  const { displayName, email } = user
  const orderDetails = {
    ordered_person: displayName,
    ordered_persons_email: email,
    service_id: id,
    service_name: title
  }
  fetch("https://service-review-assignment-server-nine.vercel.app/orders", {
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
}

const Services = () => {
  useTitle("Services");
  const [serviceData, setServiceData] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);

  useEffect(() => {

    const url = `https://service-review-assignment-server-nine.vercel.app/services?page=${page}&size=${size}`;
    const unSubscribe = () => {

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setCount(data.data.count);
            setRefresh(true);
            setServiceData(data.data.data);
          }
        });
    }
    return () => unSubscribe()

  }, [page, size]);


  return (
    <div className='my-6 mx-8 lg:mx-12' >
      {
        (refresh) ?
          <>
            {(serviceData.length === 0) ?
              <p className='text-7xl flex justify-center items-center mx-12 mt-60 h-96'>No data found</p>
              :
              <>
                <p className='my-12 font-bold text-4xl lg:text-5xl'>Order whatever you like</p>
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
                className="lg:mx-2 border border-slate-700	 bg-slate-200 lg:text-lg join-item btn"
                onClick={() => setPage(number)}>
                {number + 1}
              </button>
            ))}
          </div>
          <select
            defaultValue={5}
            onChange={(event) => setSize(event.target.value)}
            style={{ appearance: "none" }}
            className="select appearance-none border-black">
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