import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Orderpage from './Components/Orderpage'
import Gallery from './Components/Gallery'
import Services from './Components/Services'

import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Footer from './Components/Footer'



function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
    }
    );
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Orderpage />} />
        <Route path="/ordnnow" element={<Orderpage />} />
        <Route path="*" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Profile />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App