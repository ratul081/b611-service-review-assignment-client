import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={{ backgroundImage: 'url("https://i.ibb.co/M7ZYzT3/Register-bg-image.jpg")' }} className='min-h-screen'>
      {/* component */}

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

            <form action="#" className="mt-8  grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  className="block text-lg font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-2 w-full rounded-md border-gray-200 bg-white text-lg   text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="LastName"
                  className="block text-lg font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-2 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label for="Email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-2 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-2 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-2 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label for="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />
                  <span className=" text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <p className=" text-gray-500">
                  By creating an account, you agree to our
                  <a href=" " className="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href=" " className="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>

              <div className="col-span-6 flex justify-center items-center sm:gap-4">
                <div className='flex flex-col'>
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3  font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 text-gray-500">
                    Already have an account?
                    <Link href=" " className="text-gray-700 mx-1 underline">Log in</Link>.
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