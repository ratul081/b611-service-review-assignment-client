import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>Home</Link></li>
            <li><Link>Orders</Link></li>
            <li><Link>Blogs</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl">Bhoj Shala</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold text-2xl px-1">
          <li><Link>Home</Link></li>
          <li><Link>Orders</Link></li>
          <li><Link>Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">Profile logo</Link>
      </div>
    </div>
  );
};

export default Header;