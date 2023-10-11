import React from 'react';
import { Outlet } from 'react-router';
import Header from "../Shared/Header/Header"
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';



const Main = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div style={{ minHeight: "80dvh" }}>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;