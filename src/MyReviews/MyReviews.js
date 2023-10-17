import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MyReviewBox from './MyReviewBox';
import toast from 'react-hot-toast';

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext)
  const [myReviews, setMyReviews] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [update, setUpdate] = useState(false);

  // console.log("🚀 ~ file: MyReviews.js:11 ~ MyReviews ~ editReview:", editReview)


  useEffect(() => {
    const unsubscribe = () => {
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
    }
    return () => {
      return unsubscribe()
    }
  }, [user.email, update])

  console.log(myReviews);

  const handelUpdated = (myReview, updatedData) => {
    fetch(`http://localhost:5000/my_reviews/${myReview._id}`, {
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
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut();
          }
          return res.json();
        })
        .then((data) => {
          console.log("🚀 ~ file: Orders.jsx:25 ~ .then ~ data:", data);
          if (data.deletedCount > 0) {
            toast.success("Order deleted successfully");
            setUpdate(!update)
          }
        });
    }
  };


  return (
    <div>
      <div className='m-12'>
        <h1 className='text-5xl'>Here are yours reviews</h1>
        <div className='space-y-4 mt-12'>
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
      </div>
    </div>
  );
};

export default MyReviews;