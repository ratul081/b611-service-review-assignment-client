import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className='sticky top-0 left-0 w-full'>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-600" : ""
                    }
                    to="/">Home</NavLink></li>
                  <li><NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-600" : ""
                    }
                    to="/services">Services</NavLink></li>
                  <li><NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-orange-600" : ""
                    }
                    to="/orders">Orders</NavLink></li>
                  {
                    user?.uid ?
                      <li><NavLink to="/my_reviews">My reviews</NavLink></li> : <></>
                  }
                  <li><NavLink to="/blogs">Blogs</NavLink></li>
                </ul>
              </div>
              <Link className="btn btn-ghost normal-case text-lg lg:text-2xl">Bhoj Shala</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu-horizontal font-semibold px-2 lg:text-2xl md:text-xl text-sm lg:gap-12 md:gap-8 gap-3">
                <li><NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "rounded  p-2 text-2xl text-orange-600" : ""
                  }
                  to="/">Home</NavLink></li>
                <li><NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "rounded  p-2 text-2xl text-orange-600" : ""
                  }
                  to="/services">Services</NavLink></li>
                <li><NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "rounded  p-2 text-2xl text-orange-600" : ""
                  }
                  to="/orders">Orders</NavLink></li>
                {
                  user?.uid ?
                    <li><NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "rounded  p-2 text-2xl text-orange-600" : ""
                      }
                      to="/my_reviews">My reviews</NavLink></li> : <></>
                }
                <li><NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "rounded  p-2 text-2xl text-orange-600" : ""
                  }
                  to="/blogs">Blogs</NavLink></li>
              </ul>
            </div>
            <div className="navbar-end space-x-4 mx-2">
              {user?.uid ? (
                <>
                  <div className="dropdown dropdown-hover dropdown-end">
                    <label
                      htmlFor="my-drawer"
                      className="btn btn-ghost btn-circle avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://i.postimg.cc/kXm44xCH/1b96ad1f07feee81fa83c877a1e350ce.png"
                          }
                          alt=""
                        />
                      </div>
                    </label>
                  </div>
                  <button className='btn btn-primary normal-case btn-md' onClick={handleLogOut}>Logout</button>
                </>
              ) : (
                <>
                  <Link
                    className='btn btn-primary normal-case btn-sm lg:btn-md'
                    to="/login">
                    Login
                  </Link>
                  <Link
                    className='btn btn-primary normal-case btn-sm lg:btn-md'
                    to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <aside className="flex flex-col my-12 px-8 py-8 overflow-y-auto">
            <a href=" " className="mx-auto">
              <img
                className="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/full-logo.svg"
                alt=""
              />
            </a>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/6Zs7MJ3/pxfuel.jpg"
                }
                alt=""
              />
              <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
                {user?.displayName ? user?.displayName : "Anonymous"}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Profile</span>
                </Link>
                <Link

                  to="/my_reviews"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">My review</span>
                </Link>
                <Link


                  to="/orders"
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Orders</span>
                </Link>

                <Link

                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href=" ">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Settings</span>
                </Link>
              </nav>
            </div>
          </aside>
        </ul>
      </div>
    </div>
  );
};

export default Header;