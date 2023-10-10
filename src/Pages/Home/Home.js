import React, { useEffect, useState } from 'react';
import './home.css'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';


const Home = () => {

  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/services_home")
      .then(res => res.json())
      .then(data => setServices(data.data))
  }, [])

  console.log("🚀 ~ file: Home.js:11 ~ Home ~ allData:", services)


  return (
    <div>
      <Carousel></Carousel>
      <div>
        <div className='flex justify-center mx-32 my-12'>
          <div className="mx-12">
            <figure><img src="https://i.ibb.co/z4MC0gF/ic-Food-Feature-1.png" alt="Shoes" /></figure>
            <div className="text-center">
              <h2 className="text-2xl font-bold my-4">Fastest <br /> Delivery </h2>
              <p>Get your food delivered in less than an hour! That's as fast as it can get.</p>
            </div>
          </div>
          <div className="mx-12">
            <figure><img src="https://i.ibb.co/QQ52X9H/ic-Food-Feature-2.png" alt="Shoes" /></figure>
            <div className="text-center">
              <h2 className="text-2xl font-bold my-4">So Much to <br /> Choose From</h2>
              <p>Find your favorite among the
                thousands of restaurants in our
                app</p>
            </div>
          </div>
          <div className="mx-12">
            <figure><img src="https://i.ibb.co/VmHgmpT/ic-Food-Feature-3.png" alt="Shoes" /></figure>
            <div className="text-center">
              <h2 className="text-2xl font-bold my-4">Best of offer <br /> In Town!</h2>
              <p>Get the best offers and combos
                at the best price only at Bhoj Shala</p>
            </div>
          </div>

        </div>
      </div>
      <div className='my-12'>
        <h1 className='text-center text-5xl font-semibold my-14' >Explore our bests</h1>
        <div className='flex justify-center gap-4 mx-28'>
          {
            services.map((data, index) => <Cards
              key={index}
              data={data}
            ></Cards>)
          }
        </div>
        <div className='flex justify-center'>
          <Link to='/services' className='text-xl btn btn-primary normal-case my-8'>Browse all</Link>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className='flex flex-col justify-center'>
          <p className='text-5xl font-bold'>Pay Cashless for your Food</p>
          <p className='text-2xl my-6'>Don't have any cash? No worries!  Pay digitally instead of cash.</p>
          <p className='text-xl'>Learn more</p>
        </div>
        <img width={820} src="https://i.ibb.co/5nG8s2Z/pay-info.png" alt="" />
      </div>
    </div>
  );
};

export default Home;