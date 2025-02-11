// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Certificatepage from './components/Certificatepage';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';


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

          {/* education  */}
          < Route path='/education' element={ <Education /> } />
          
          {/* projects */}
          <Route path='/projects' element={ < Projects /> } />

          {/* contact  */}
          <Route path='/contact' element={< Contact />} />


        </Routes>

        <a href="https://wa.me/62895324867789" target='_blank'><img src="src/assets/icons/whatsapp.png" alt="whatsapp" className='w-12 fixed bottom-20 right-5 md:right-20 hover:animate-bounce hover:cursor-pointer shadow-2xl rounded-full' /></a>
        
      
      </BrowserRouter>
     
    </>
  )
}

export default App
