import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [serviceData, setFoodData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(data => setFoodData(data))
  }, [])
  console.log(serviceData);
  return (
    <div className='my-6 mx-12' >
      <p className='my-12 font-bold text-2xl'>Order whatever you like</p>
      <div className='mx-24 grid grid-cols-3 gap-8 place-items-center'>
        {
          serviceData.map((service, index) =>
            <Service
              key={index}
              service={service}
            ></Service>
          )
        }
      </div>
    </div>
  );
};

export default Services;