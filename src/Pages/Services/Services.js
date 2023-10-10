import React, { useContext, useEffect, useState } from 'react';
import Service from './Service';
import { AuthContext } from '../../Context/AuthProvider';

const Services = () => {
  const { user } = useContext(AuthContext)
  const { displayName, email } = user

  const [serviceData, setFoodData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setFoodData(data.data))
  }, [])
  const { title, _id } = serviceData
  const handelOrder = () => {
    const orderDetails = {
      name: displayName,
      email,
      service_id : _id,
      service_name: title
    }
  }


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