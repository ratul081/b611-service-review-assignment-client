import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { setAuthToken } from '../../Utilities/Api';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  useTitle("Register");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [agree, setAgree] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, },
    validate,
    reset,
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const handleSingUp = (data) => {
    const { email, password, firstName, lastName } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        reset();
        handleUpdateUser(firstName, lastName);
        setAuthToken(user)
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleUpdateUser = (firstName, lastName) => {
    const profile = {
      displayName: firstName + " " + lastName,
    };
    updateUserProfile(profile)
      .then(() => {
        // toast.success("Profile updated successfully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div style={{ backgroundImage: 'url("https://i.ibb.co/M7ZYzT3/Register-bg-image.jpg")' }} className='min-h-screen'>
      <section className="lg:grid items-center">
        <main
          className="flex  items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl bg-white rounded-lg p-8 lg:max-w-3xl">
            <a className="block text-blue-600" href="/">
              <span className="sr-only">Home</span>
              <img className='h-12' src="https://i.ibb.co/Dz7FjgW/favicon.png" alt="" />
            </a>

            <h1
              className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to Squid 🦑
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
              dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form onSubmit={handleSubmit(handleSingUp)}
              className="mt-8  grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label

                  className="block text-lg font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "Please enter your first name",
                    maxLength: 100,
                  })}

                  className="input input-bordered mt-2 w-full rounded-md border-black bg-white text-lg   text-gray-700 shadow-sm"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-lg">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label

                  className="block text-lg font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Please enter your last name",
                    maxLength: 100,
                  })}

                  className="input input-bordered mt-2 w-full rounded-md border-black bg-white text-lg text-gray-700 shadow-sm"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-lg">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div className="col-span-6">
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^\S+@\S+$/i,
                  })}

                  className="input input-bordered mt-2 w-full rounded-md border-black bg-white text-lg text-gray-700 shadow-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-lg">{`${errors.email.message}`}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 10 characters",
                    },
                  })}
                  className="input input-bordered mt-2 w-full rounded-md border-black bg-white text-lg text-gray-700 shadow-sm" />
                {errors.password && (
                  <p className="text-red-500 text-lg">{`${errors.password.message}`}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-lg font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  placeholder="Re-type Password"
                  {...register("passwordConfirmation", {
                    validate: (value) =>
                      value === getValues("password") || "Passwords must match",
                    required: validate ? "" : "Passwords must match",
                  })}

                  className="input input-bordered mt-2 w-full rounded-md border-black bg-white text-lg text-gray-700 shadow-sm"
                />
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-lg">{`${errors.passwordConfirmation.message}`}</p>
                )}
              </div>
              <div className="col-span-6">
                <div className='flex space-x-4'>
                  <div className="grid place-items-center">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <input type="checkbox" className="h-5 w-5 grid place-items-center rounded-md border-black bg-white shadow-sm" placeholder="agree" onChange={() => setAgree(!agree)} />
                    </label>
                  </div>
                  <p className=" text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </p>
                </div>
              </div>
              <div className="col-span-6">
                <p className=" text-gray-500">
                  By creating an account, you agree to our
                  <Link className="mx-2 text-gray-700 underline">terms and conditions</Link>and
                  <Link className="mx-2 text-gray-700 underline">privacy policy</Link>.
                </p>
              </div>
              <div className="col-span-6 flex justify-center items-center sm:gap-4">
                <div className='flex flex-col'>
                  <button type='submit'
                    className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3  font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ${agree ? '' : "btn-disabled"}`}>
                    Create an account
                  </button>
                  <p className="mt-4 text-gray-500">
                    Already have an account?
                    <Link className="text-gray-700 mx-1 underline">Log in</Link>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div >
  );
};

export default Register;