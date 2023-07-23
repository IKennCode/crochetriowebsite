import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';

import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
import Footer from "./component/footer";



function App() {
  return (
    <>
        <Navbar/>
        <Landing />
        <Footer />
    </>
  );
}

export default App;
