import React from 'react';
import { Outlet } from 'react-router';
import Header from "../Shared/Header/Header"
import Footer from '../Shared/Footer/Footer';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Main = () => {
  return (
    <>
      <div style={{ minHeight: "80vh" }}>
        <Header></Header>
        <PhotoProvider maskOpacity={0.8} bannerVisible={false} easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')} speed={()=>700} >
          <Outlet></Outlet>
        </PhotoProvider>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;