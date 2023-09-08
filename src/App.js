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
import huggingheart from "./Image/yogabeach.jpg"



function App() {
  return (
    <div className="my-container bg-light min-vh-100 ">
      <div className="container mx-auto my-content" >
        <Router>
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
        </Router>
      </div>
      

    </div>
  );
}

export default App;
