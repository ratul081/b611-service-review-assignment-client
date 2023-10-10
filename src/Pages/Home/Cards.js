import React from 'react';

const Cards = ({ data }) => {
  const { title, details, image } = data
  return (
    <div className="group relative block bg-black mx-12 w-32 h-32 md:w-44 md:h-44 rounded-2xl lg:w-96 lg:h-96">
      <img
        alt="Developer"
        src={image}
        className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-90 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
          <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
        </div>
        <div className="mt-4 sm:mt-8 lg:mt-32">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white overflow-hidden h-36">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;