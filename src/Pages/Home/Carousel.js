import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {
      url: 'https://i.ibb.co/YLt9H8j/eb-slide-23423-2.jpg',
    },
    {
      url: 'https://i.ibb.co/tPqNjpv/eb-slide-23423-1.jpg',
    },
    {
      url: 'https://i.ibb.co/LYrGDm2/Do-T-Shorshe-Posto-Macher-Jhol-1.jpg',
    },

    {
      url: 'https://i.ibb.co/T1kK6bN/Shorsha-Ilish.jpg',
    },
    {
      url: 'https://i.ibb.co/gMbCCVH/4r332432.jpg',
    },
    {
      url: 'https://i.ibb.co/YkQCv7C/eb-slide-23423-3.jpg',
    },
    {
      url: 'https://i.ibb.co/q1TD70V/Kosha-Manghso-Bengali-Mutton-Kasha-Calcutta-Style-Mutton-Curry.jpg',
    },
    {
      url: 'https://i.ibb.co/dJyZ569/chicken-pulao.jpg',
    },
    {
      url: 'https://i.ibb.co/fGmfXJ7/osjrt3e8-pithe-625x300-12-January-23.jpg',
    },
    {
      url: 'https://i.ibb.co/s3KSJYT/Prawns-Pulao-2213-1.jpg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className='max-w-[1650px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;