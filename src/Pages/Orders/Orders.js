import React from 'react';

const Orders = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="text-center">
            <h1 className="lg:text-4xl font-bold text-gray-900 text-2xl">Your Orders</h1>
          </header>
          <div className="mt-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-lg">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-lg">
                      Items
                    </th>
                    <th scope="col" className="px-6 py-3 text-lg">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-lg">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-32 p-4">
                      <img src="/docs/images/products/apple-watch.png" alt="Apple Watch" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      Apple Watch
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      $599
                    </td>
                    <td className="px-6 py-4">
                      <a href=" " className="font-medium text-red-600 dark:text-red-500 hover:underline text-lg">Remove</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-32 p-4">
                      <img src="/docs/images/products/imac.png" alt="Apple Imac" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      Imac 27"
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      $2499
                    </td>
                    <td className="px-6 py-4">
                      <a href=" " className="font-medium text-red-600 dark:text-red-500 hover:underline text-lg">Remove</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-32 p-4">
                      <img src="/docs/images/products/iphone-12.png" alt="Iphone 12" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      Iphone 12
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                      $999
                    </td>
                    <td className="px-6 py-4">
                      <a href=" " className="font-medium text-red-600 dark:text-red-500 hover:underline text-lg">Remove</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between text-lg">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between text-lg">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between text-lg">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span
                    className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <a
                    href=" "
                    className="block rounded-lg bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;