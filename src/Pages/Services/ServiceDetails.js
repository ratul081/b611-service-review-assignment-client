import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext)
  const { _id, title, description, image } = useLoaderData().data
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handelReviewSubmit = data => {
    const { star, review } = data
    const reviewDetails = {
      service_name: title,
      service_id: _id,
      reviewed_person: `${user?.displayName ? user?.displayName : "Anonymous"}`,
      rating: `${star ? star : "N/A"}`,
      review_text: review
    }
    console.log("🚀 ~ file: ServiceDetails.js:17 ~ handelReviewSubmit ~ reviewData:", reviewDetails)

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) =>
        (data.data.acknowledged) ?
          toast.success("Service added successfully") : toast.error("Something went wrong")
      )

    // console.log(data);
  }
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-12 lg:px-4 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="lg:pr-10 lg:mt-10">
            <h5 className="mb-4 text-3xl lg:text-6xl font-extrabold leading-none">
              {title}
            </h5>
            <p className="mb-6 text-gray-900 text-justify">{description}</p>
            <Link
              className="btn normal-case text-xl btn-accent">
              Order now
            </Link>
          </div>
          <div className='grid place-items-center'>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className='mx-12 my-6 '>
        <p className='text-5xl font-semibold text-center'>Reviews</p>
        <div className='my-6'>
          <p className='text-4xl text-center'>Give us a rating</p>
          <form onSubmit={handleSubmit(handelReviewSubmit)}>
            <div aria-disabled className="rating rating-lg  my-4 flex justify-center">
              {[...Array(5).keys()].map((number) => (

                <input
                  {...register("star")} type="radio"
                  value={`${number + 1}`} className="mask mask-star-2 bg-orange-400"
                  key={number}
                />

              ))}

            </div>
            <p className='text-3xl font-semibold my-6'>Leave some feedback</p>
            <textarea
              type="text"
              id="review"
              {...register("review", { required: "Text field can not be empty" })}
              className="textarea textarea-info w-full  rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Review"
              rows={8}
            />
            <input className='my-4 btn btn-primary' type="submit" />
          </form>
        </div>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;