import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/constant_component.css';

import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
import Commission from "./pages/Commission";
import Footer from "./component/footer";



function App() {
  return (
    <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services/commission" element={<Commission />} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
