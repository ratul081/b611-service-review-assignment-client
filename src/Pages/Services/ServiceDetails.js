import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Reviews from '../Reviews/Reviews';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { handelOrder } from './Services';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext)
  const { _id, title, description, image } = useLoaderData().data
  const [refresh, setRefresh] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handelReviewSubmit = data => {
    const { star, review } = data
    const reviewDetails = {
      service_name: title,
      service_id: _id,
      reviewed_person: `${user?.displayName ? user?.displayName : "Anonymous"}`,
      reviewed_persons_email: `${user?.email}`,
      rating: `${star ? star : 0}`,
      reviewed_text: review
    }

    fetch("https://service-review-assignment-server-nine.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        (data.data.acknowledged) ?
          toast.success("Review sent") : toast.error("Something went wrong")
        setRefresh(!refresh)
      }
      )

  }
  return (
    <>
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-12 lg:px-4 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="lg:pr-10 lg:mt-10">
            <h5 className="mb-4 text-4xl lg:text-6xl font-extrabold leading-none">
              {title}
            </h5>
            <p className="mb-6 text-gray-900 text-justify">{description}</p>
            <button onClick={() => handelOrder(_id, title, user)}
              className="btn normal-case text-xl btn-accent">
              Order now
            </button>
          </div>
          <div className='grid place-items-center'>
            <PhotoView src={image} >
              <img
                className="object-cover lg:w-full h-72 lg:h-96 w-80  rounded shadow-lg"
                src={image}
                alt={title}
              />
            </PhotoView>
          </div>
        </div>
        <div className='lg:mx-12 my-6 '>
          <p className='text-3xl lg:text-5xl font-semibold text-center'>Reviews</p>
          <div className='my-6'>
            {
              user && user?.uid ?
                <form onSubmit={handleSubmit(handelReviewSubmit)}>
                  <p className='text-4xl text-center'>Give us a rating</p>
                  <div aria-disabled className="rating rating-lg  my-4 flex justify-center">
                    {[...Array(5).keys()].map((number) => (
                      <input
                        {...register("star")} type="radio"
                        defaultChecked={number + 1 === 1}
                        value={number + 1} className="mask mask-star-2 bg-orange-400"
                        key={number}
                      />
                    ))}
                  </div>
                  <p className='text-xl lg:text-3xl font-semibold my-6'>Share your thoughts with us</p>
                  <div className='flex flex-col'>
                    <textarea
                      type="text"
                      id="review"
                      {...register("review", { required: "Text field can not be empty" })}
                      className="textarea textarea-info lg:w-full  rounded-lg h-32 lg:h-64 border-gray-200 p-3 text-lg"
                      placeholder="Review"

                    />
                    {errors.review && (
                      <p className="text-red-600 text-lg mt-1">
                        {errors.review.message}
                      </p>
                    )}
                    <div className='flex  justify-end'>
                      <input className='my-4 btn lg:w-60 w-1/2 btn-primary' type="submit" />
                    </div>
                  </div>
                </form>
                :
                <div className='grid place-items-center my-10 lg:text-4xl text-2xl text-red-600'>
                  <Link to="/login">Please log in to review</Link>
                </div>
            }
          </div>
        </div>
        <Reviews
          service_id={_id}
          refresh={refresh}
        ></Reviews>
      </div>
    </>
  );
};

export default ServiceDetails;