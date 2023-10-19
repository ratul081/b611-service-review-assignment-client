import React from 'react';


const Cards = ({ data }) => {
  const { title, details, image } = data
  return (
    <div className="group relative block bg-black lg:mx-12 w-72 my-4 md:w-4/5 md:h-96 rounded-2xl lg:w-96 lg:h-96">
      <img
        alt="Developer"
        src={image}
        className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-90 transition-opacity group-hover:opacity-40"
      />
      <div className="relative p-4 md:p-6 lg:p-8">
        <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
          <p className="text-xl h-14 font-bold text-white md:text-3xl">{title}</p>
        </div>
        <div className="mt-4 md:mt-28 lg:mt-24">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm md:text-xl text-white overflow-hidden h-36">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;