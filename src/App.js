import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/constant_component.css';

import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
import Commission from "./pages/Commission";
import Footer from "./component/footer";
import PaymentConfirm from "./pages/PaymentConfirm";
import AboutPage from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/_Regsiter";
import Marketplace from "./pages/Marketplace";
import Merchant from "./pages/Merchant";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";



function App() {
  //sample data for local storage
  // localStorage.setItem('registered_user',JSON.stringify([{fullname: 'joseph Naval', email: 'sample@Email.com', password: 'strongPassword', phone: 98876543219, address: "bingbong", account_type: "user"}]));

  const session_user = JSON.parse(sessionStorage.getItem('session_user'));
  const user_active = session_user ? session_user : false;

  return (
    <>
        <Navbar/>
          <Routes>
            {
              user_active.account_type !== 'Merchant' ? 
                <Route path="/" element={<Landing />} />
              :<Route path="/" element={<Merchant />} />
            }
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact" element={<Contact />} />

            
            <Route path="/services/commission" element={<Commission />} />
            <Route path="/services/marketplace" element={<Marketplace />} />
            <Route path="/services/commission/payment_confirm" element={<PaymentConfirm />} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
