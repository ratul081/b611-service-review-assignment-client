import React, { useEffect, useState } from 'react';
import './home.css'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  const [services, setServices] = useState([])
  useTitle("Home");
  useEffect(() => {
    fetch("https://service-review-assignment-server-nine.vercel.app/services_home")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.status) {
          setServices(data.data)
        }
      })
  }, [])

  console.log(services);
  return (
    <div>
      <Carousel></Carousel>
      <div className='grid lg:grid-cols-3 lg:mx-32 space-y-4 my-12'>
        <div className="mx-12">
          <figure className='flex justify-center'><img className='lg:w-full w-3/4' src="https://i.ibb.co/z4MC0gF/ic-Food-Feature-1.png" alt="Shoes" /></figure>
          <div className="text-center mx-5">
            <h2 className="text-2xl font-bold my-4">Fastest <br /> Delivery </h2>
            <p>Get your food delivered in less than an hour! That's as fast as it can get.</p>
          </div>
        </div>
        <div className="mx-12">
          <figure className='flex justify-center'><img className='lg:w-full w-3/4' src="https://i.ibb.co/QQ52X9H/ic-Food-Feature-2.png" alt="Shoes" /></figure>
          <div className="text-center mx-5">
            <h2 className="text-2xl font-bold my-4">So Much to <br /> Choose From</h2>
            <p>Find your favorite among the
              thousands of restaurants in our
              app</p>
          </div>
        </div>
        <div className="mx-12">
          <figure className='flex justify-center'><img className='lg:w-full w-3/4' src="https://i.ibb.co/VmHgmpT/ic-Food-Feature-3.png" alt="Shoes" /></figure>
          <div className="text-center mx-5">
            <h2 className="text-2xl font-bold my-4">Best of offer <br /> In Town!</h2>
            <p>Get the best offers and combos
              at the best price only at Bhoj Shala</p>
          </div>
        </div>

      </div>
      <div className='my-12'>
        <h1 className='text-center text-5xl font-semibold mb-4 lg:my-14'>Explore our bests</h1>
        <div className='grid lg:grid-cols-3 place-items-center lg:gap-4 lg:mx-28'>
          {
            (services.length > 0) && (services.map((data, index) => <Cards
              key={index}
              data={data}
            ></Cards>))
          }
        </div>
        <div className='flex justify-center'>
          <Link to='/services' className='text-xl btn btn-primary normal-case my-8'>Browse all</Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center">
        <div className='flex flex-col mx-8 justify-center mb-4'>
          <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>Pay Cashless for your Food</p>
          <p className='lg:text-2xl md:text-xl my-6'>Don't have any cash? No worries!  Pay digitally instead of cash.</p>
          <p className='text-xl'>Learn more</p>
        </div>
        <img className='w-5/6 lg:w-full' src="https://i.ibb.co/5nG8s2Z/pay-info.png" alt="" />
      </div>
    </div>
  );
};

export default Home;