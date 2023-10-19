import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MyReviewBox from './MyReviewBox';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext)
  const [myReviews, setMyReviews] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [update, setUpdate] = useState(false);
  useTitle("My Reviews");

  // console.log("🚀 ~ file: MyReviews.js:11 ~ MyReviews ~ editReview:", editReview)


  useEffect(() => {
    
      fetch(`https://service-review-assignment-server-nine.vercel.app/my_reviews?email=${user.email}`, {
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
  }, [user.email, update, logOut])

  const handelUpdated = (myReview, updatedData) => {
    fetch(`https://service-review-assignment-server-nine.vercel.app/my_reviews/${myReview._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ updatedData })
    }
    )
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Updated successfully")
          setUpdate(!update)
        }
      })
  }

  const handleDeleted = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://service-review-assignment-server-nine.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut();
          }
          return res.json();
        })
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Order deleted successfully");
            setUpdate(!update)
          }
        });
    }
  };


  return (
    <div>
      {
        refresh ?
          <>
            {(myReviews.length === 0) ?
              <>
                <div className="justify-center mx-12 mt-60  text-center">
                  <p className="text-7xl">No review found</p>
                </div>
              </>
              :
              <div className='lg:m-12 m-6'>
                <h1 className='text-xl lg:text-5xl'>Here are yours reviews</h1>
                <div className='space-y-4 mt-12 '>
                  {
                    myReviews.map(myReview =>
                      <MyReviewBox
                        key={myReview._id}
                        myReview={myReview}
                        handelUpdated={handelUpdated}
                        handleDeleted={handleDeleted}
                      ></MyReviewBox>
                    )
                  }
                </div>
              </div>}
          </>
          :
          <>
            <div className="flex justify-center items-center h-96">
              <span className="text-5xl loading loading-spinner loading-lg"></span>
            </div>
          </>
      }
    </div>
  );
};

export default MyReviews;