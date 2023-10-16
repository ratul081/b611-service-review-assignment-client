import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import OrderTable from "./OrderTable";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user, logout } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log("🚀 ~ file: Orders.js:10 ~ Orders ~ orders:", orders);
  useEffect(() => {
    const unsubscribe = () => {
      fetch(`http://localhost:5000/orders?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "b611ServiceAssignmentToken"
          )}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRefresh(true)
          setOrders(data.data ? data.data : [])
        });
    };
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);
  const handleDeleted = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logout();
          }
          return res.json();
        })
        .then((data) => {
          console.log("🚀 ~ file: Orders.jsx:25 ~ .then ~ data:", data);
          if (data.deletedCount > 0) {
            toast.success("Order deleted successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  console.log(orders.length);
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {
            refresh ?
              <>
                {
                  (orders.length === 0) ?
                    <div className="flex flex-col justify-center  m-12 text-center">
                      <p className="text-7xl">No orders found</p>
                      <p className="text-2xl my-4">
                        Didn't Order anything?
                        <Link to="/services" className="text-blue-700 mx-4">
                          Please order something
                        </Link>
                      </p>
                    </div>
                    :
                    <>
                      <header className="text-center">
                        <h1 className="lg:text-4xl font-bold text-gray-900 text-2xl">
                          Your Orders
                        </h1>
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
                              {orders.map((order) => (
                                <OrderTable
                                  key={order._id}
                                  order={order}
                                  handleDeleted={handleDeleted}></OrderTable>
                              ))}
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
                              <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="-ms-1 me-1.5 h-4 w-4">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                  />
                                </svg>

                                <p className="whitespace-nowrap text-xs">
                                  2 Discounts Applied
                                </p>
                              </span>
                            </div>

                            <div className="flex justify-end">
                              <a
                                href=" "
                                className="block rounded-lg bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600">
                                Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                }
              </>
              :
              <div className="flex justify-center items-center h-96">
                <span className="text-5xl loading loading-spinner loading-lg"></span>
              </div>
          }

        </div>
      </div >
    </section >
  );
};

export default Orders;
