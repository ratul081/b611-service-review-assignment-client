import React from 'react';
import { BsFillStarFill, BsStar } from "react-icons/bs";
const Star = ({ rating }) => {
  const value = (rating === "false") ? 0 : parseInt(rating)
  const totalStars = 5
  const emptyStars = totalStars - value;
  console.log("🚀 ~ file: Star.js:6 ~ Star ~ value:", value)
  // console.log("🚀 ~ file: Star.js:6 ~ Star ~ emptyStars:", emptyStars)
  return (
    <div className="flex gap-x-1 text-lg">
      {
        (value === 0) ?
          <>
            No rating
          </>
          : <>
            {[...Array(value)].map((item, index) =>
              <div key={index}>
                <BsFillStarFill color='#FB923C' />
              </div>
            )}
            {[...Array(emptyStars)].map((item, index) =>
              <div key={index}>
                <BsStar color='#FB923C' />
              </div>
            )}
          </>
      }
    </div>
  );
};

export default Star;