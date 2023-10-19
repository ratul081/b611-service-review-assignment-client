import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {
      url: 'https://i.ibb.co/YLt9H8j/eb-slide-23423-2.jpg',
      quote: "'One cannot think well, love well, sleep well if one has not dined well.'",
      author: "- Virginia Woolf"

    },
    {
      url: 'https://i.ibb.co/tPqNjpv/eb-slide-23423-1.jpg',
      quote: `${"People who love to eat are always the best people."}`,
      author: "- Julia Child"
    },
    {
      url: 'https://i.ibb.co/LYrGDm2/Do-T-Shorshe-Posto-Macher-Jhol-1.jpg',
      quote: `${"Food is our common ground, a universal experience."}`,
      author: "- James Beard"
    },

    {
      url: 'https://i.ibb.co/T1kK6bN/Shorsha-Ilish.jpg',
      quote: `${"Your health is what you make of it. Everything you do and think either adds to the vitality, energy, and spirit you possess or takes away from it."}`,
      author: "- Ann Wigmore"
    },
    {
      url: 'https://i.ibb.co/gMbCCVH/4r332432.jpg',
      quote: `${"Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together."}`,
      author: "- Guy Fieri"
    },
    {
      url: 'https://i.ibb.co/YkQCv7C/eb-slide-23423-3.jpg',
      quote: `${"Food brings people together on many different levels. It's the nourishment of the soul and body; it's truly love."}`,
      author: "- Giada De Laurentiis"
    },
    {
      url: 'https://i.ibb.co/q1TD70V/Kosha-Manghso-Bengali-Mutton-Kasha-Calcutta-Style-Mutton-Curry.jpg',
      quote: `${"You are what you eat, so don't be fast, cheap, easy, or fake."}`,
      author: "- Unknown"
    },
    {
      url: 'https://i.ibb.co/dJyZ569/chicken-pulao.jpg',
      quote: `${"Your body is a temple, but only if you treat it as one."}`,
      author: "- Astrid Alauda"
    },
    {
      url: 'https://i.ibb.co/fGmfXJ7/osjrt3e8-pithe-625x300-12-January-23.jpg',
      quote: `${"Your health is what you make of it. Everything you do and think either adds to the vitality, energy, and spirit you possess or takes away from it."}`,
      author: "- Ann Wigmore"
    },
    {
      url: 'https://i.ibb.co/s3KSJYT/Prawns-Pulao-2213-1.jpg',
      quote: `${"To keep the body in good health is a duty, for otherwise, we shall not be able to trim the lamp of wisdom, and keep our mind strong and clear."}`,
      author: "- Buddha"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? (slides.length - 1) : (currentIndex - 1);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === (slides.length - 1);
    const newIndex = isLastSlide ? 0 : (currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  setTimeout(() => nextSlide(), 10000)
  return (
    <div className='max-w-[1650px] h-[780px] w-full m-auto mt-0 py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: "rgba(0,0,0,0.6)", backgroundBlendMode: "multiply" }}
        className='w-full h-full bg-center bg-cover duration-500 grid place-items-center'>
        <div className='text-white px-96'>
          <p className='text-4xl text-center my-2 leading-snug' >{slides[currentIndex].quote}</p>
          <p className='text-end text-xl italic '>{slides[currentIndex].author}</p>
        </div>
      </div>
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
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;