import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home.js'
import Offerings from './pages/Offerings/Offerings.js'
import About from './pages/about/About.js'
import Whats_New from './pages/whatsnew/Whats_New.js';
import Contact_Us from './pages/contactus/Contact_Us.js';


import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="offerings" element={<Offerings />} />
          <Route path="about" element={<About />} />
          <Route path="Whats_New" element={<Whats_New/>} />
          <Route path='contact_us' element={<Contact_Us />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App