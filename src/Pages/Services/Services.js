import React, { useEffect, useState } from 'react';
import Service from './Service';
import toast from 'react-hot-toast';

const Services = () => {
  const [serviceData, setFoodData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setFoodData(data.data))
  }, [])
  const handelOrder = (id, title, user) => {
    const { displayName, email } = user
    const orderDetails = {
      name: displayName,
      email,
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
          toast.success("Service added successfully") : toast.error("Service")
      )
    console.log(orderDetails);
  }


  console.log(serviceData);
  return (
    <div className='my-6 mx-12' >
      {/* <button onClick={() => toast.success("Service added successfully")}>Hlw</button> */}
      <p className='my-12 font-bold text-2xl'>Order whatever you like</p>
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
    </div>
  );
};

export default Services;