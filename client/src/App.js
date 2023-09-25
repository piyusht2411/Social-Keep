import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div>
      <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
    
      </>
    </div>
  )
}

export default App
