import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Doctors from './pages/Doctors';
import { useState } from 'react';





const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/doctors' element={<Doctors/>} />
      
       
       
      </Routes>

      
    </>
  );
};

export default App;
