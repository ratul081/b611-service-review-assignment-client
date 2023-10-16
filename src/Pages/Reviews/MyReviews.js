import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Star from './Star';

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext)
  const [myReviews, setMyReviews] = useState([])
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:5000/my_reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "b611ServiceAssignmentToken"
        )}`,
      },
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logOut()
        }
        return res.json()
      })
      .then(data => {
        setRefresh(true)
        setMyReviews(data.data)
      })
  }, [user.email])

  // console.log(myReviews);


  return (
    <div>
      <div className='m-12'>
        <h1 className='text-5xl'>Here are yours reviews</h1>
        <div className='space-y-4'>
          {
            myReviews.map(myReview => <div
              key={myReview._id}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div aria-disabled className="rating rating-md">
                    {
                      <Star rating={myReview?.rating}></Star>
                    }
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {myReview?.reviewed_person}
                  </p>
                </div>

              </div>

              <p className="mt-4 text-gray-700">
                {myReview?.reviewed_text}
              </p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyReviews;