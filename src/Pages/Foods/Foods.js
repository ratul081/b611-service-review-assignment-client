import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
  const [foodData, setFoodData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(data => setFoodData(data))
  }, [])
  console.log(foodData);
  return (
    <div className='my-6 mx-12' >
      <p className='my-12 font-bold text-2xl'>Order whatever you like</p>
      <div className='mx-24 grid grid-cols-3 gap-8 place-items-center'>
        {
          foodData.map((food, index) =>
            <Food
              key={index}
              food={food}
            ></Food>
          )
        }
      </div>
    </div>
  );
};

export default Foods;