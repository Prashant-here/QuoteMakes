import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import About from './components/About'

import Footer from './components/Footer'
import Example from './components/Example'
import CustomCanvas from './components/CustomCanvas.jsx'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className="h-[100vh] w-[100%]">
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/quotemaker" element={<CustomCanvas />}> </Route>
    <Route path="/about" element={<About />}></Route>
  </Routes>
    


   
    
    </div>
    </>
  )
}

export default App