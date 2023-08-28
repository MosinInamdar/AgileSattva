import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home.js'
import Offerings from './pages/Offerings/Offerings.js'
import About from './pages/about/About.js'


import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="offerings" element={<Offerings />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App