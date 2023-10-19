import React, { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import Star from '../Pages/Reviews/Star';
import { BsTrashFill } from 'react-icons/bs';



const MyReviewBox = ({ myReview, handelUpdated, handleDeleted }) => {
  const [show, setShow] = useState(true);
  const [editReview, setReviewEdit] = useState("");
  const viewEditBox = (myReview) => {
    setShow(!show);
    if (show) {
      // console.log("open edit");
      setReviewEdit(myReview._id)
    }
    else {
      // console.log("close edit");
      setReviewEdit("")
    }
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleUpdate = data => {
    const { star, review } = data
    const updatedData = {
      $set: {
        rating: `${star ? star : 0}`,
        reviewed_text: review
      }
    }
    handelUpdated(myReview, updatedData)
    setReviewEdit(" ")
    // console.log("🚀 ~ file: MyReviews.js:56 ~ onSubmit ~ updatedData:", updatedData)
  }
  // console.log(errors);
  return (
    <>
      <div
        className="rounded-lg bg-gray-50 lg:mx-24 mt-4 mb-4 p-6 border-2 border-orange-400 shadow-sm sm:p-8 relative">
        <div>
          <p className='text-lg lg:text-2xl mb-4 lg:mt-0 my-4 font-semibold'>{myReview?.service_name}</p>
          <div className="absolute right-1 top-3 lg:right-5 lg:top-5 text-xl lg:text-4xl space-x-2">
            <button onClick={() => viewEditBox(myReview)}><BiEdit color='#5b5b5b' /></button>
            <button onClick={() => handleDeleted(myReview._id)} ><BsTrashFill color='#e65353' /></button>
          </div>
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

        </div>
      </div>
      <div className='mx-24  p-6'>
        <div>
          {
            (editReview === myReview._id) && (
              <form onSubmit={handleSubmit(handleUpdate)}>
                <p className='font-semibold'>Edit your rating</p>
                <div aria-disabled className="rating rating-lg mb-2 flex justify-center">
                  {[...Array(5).keys()].map((number) => (
                    <input
                      {...register("star")} type="radio"
                      value={`${number + 1}`} className="mask mask-star-2 bg-orange-400"
                      key={number}
                    />
                  ))}

                </div>
                <p className='font-semibold'>Edit your text</p>
                <textarea
                  type="text"
                  id="review"
                  {...register("review", { required: "Text field can not be empty" })}
                  className="textarea textarea-info w-full my-1 rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Review"
                  rows={4}
                />
                {errors.review && (
                  <p className="text-red-600 text-lg mt-1 mb-2">
                    {errors.review.message}
                  </p>
                )}
                <button className='btn btn-warning normal-case text-lg' type="submit">Save</button>
              </form>
            )
          }
        </div>
      </div>
    </>
  );
};

export default MyReviewBox;