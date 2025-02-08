// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Certificatepage from './components/Certificatepage';
import Homepage from './components/homepage'
import Navbar from './components/Navbar'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from './components/Projects';


function App() {

  return (
    <>
      <BrowserRouter>
        {/* navbar */}
        < Navbar />
        <Routes>

          {/* homepage */}
          < Route path='/' element={< Homepage /> } />
          

          {/* certificate */}
          < Route path='/certificate' element={< Certificatepage /> } />

          {/* projects */}
          <Route path='/projects' element={ < Projects /> } />


        </Routes>
        
      
      </BrowserRouter>
     
    </>
  )
}

export default App
