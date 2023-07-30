import React from 'react';
import About from '../component/about';
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

const Page = () => {
  return (
    <div>
        <Navbar/>
        <About />
        <Footer/>
    </div>
  );
};

export default Page;
