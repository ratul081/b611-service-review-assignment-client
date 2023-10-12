import React from 'react';
import { Outlet } from 'react-router';
import Header from "../Shared/Header/Header"
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <>
      <div style={{ minHeight: "80vh" }}>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;