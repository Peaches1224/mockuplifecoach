import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import FooterBox from "./features/FooterBox";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TopHeader from "./components/TopHeader";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import './App.css';
import Image from 'react-bootstrap/Image';




function App() {
  return (
    <>
      <div className="my-container min-vh-100 ">
        <div className="container mx-auto my-content" >

          <TopHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contacts />} />

          </Routes>
          <FooterBox />
        </div>
      
      </div>
     
    </>
  );
}

export default App;
