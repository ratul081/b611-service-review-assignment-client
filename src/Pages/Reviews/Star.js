import React from 'react';
import { BsFillStarFill, BsStar } from "react-icons/bs";
const Star = ({ value }) => {
  const totalStars = 5
  const emptyStars = totalStars - value;
  return (
    <div className="flex gap-x-1 text-lg">
      {[...Array(value)].map((index) => (
        <span key={index}>
          <BsFillStarFill color='#FB923C' />
        </span>
      ))}
      {[...Array(emptyStars)].map((index) => (
        <span key={index}>
          <BsStar color='#FB923C' />
        </span>
      ))}
    </div>
  );
};

export default Star;