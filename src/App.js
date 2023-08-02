import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/constant_component.css';
import './static/css/cards.css';

import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
import Commission from "./pages/Commission";
import Footer from "./component/footer";
import PaymentConfirm from "./pages/PaymentConfirm";
import AboutPage from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/_Regsiter"
import  Products from "./component/products";
import contents from './content';









function App() {
  //sample data for local storage
  // localStorage.setItem('registered_user',JSON.stringify([{fullname: 'joseph Naval', email: 'sample@Email.com', password: 'strongPassword', phone: 98876543219, address: "bingbong", account_type: "user"}]));

  return (
    <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services/commission" element={<Commission />} />
            <Route path="/services/commission/payment_confirm" element={<PaymentConfirm />} />
          </Routes>
          <h1>Premade Crochet Designs</h1>
          <div className='crochet'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        sale={contents.sale}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
        <Footer />
        
    </>
  );
}

export default App;
