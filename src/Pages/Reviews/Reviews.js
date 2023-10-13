import React from 'react';

const Reviews = () => {

  const value = 0
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
              praesentium natus sapiente commodi. Aliquid sunt tempore iste
              repellendus explicabo dignissimos placeat, autem harum dolore
              reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>
          <a href=" "
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0">
            <span className="font-medium"> Read all reviews </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {[...Array(5).keys()].map((number) => (
            <div key={number}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">

                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  {
                    Array.apply()
                  }
                  <div aria-disabled className="rating rating-md">
                    {[...Array(5).keys()].map((number) => (
                      <input key={number} disabled checked={number ===value} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    ))}

                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                obcaecati neque quibusdam eius accusamus error officiis atque
                voluptates magnam!
              </p>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default Reviews;