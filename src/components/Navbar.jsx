// import React from 'react'

import { NavLink } from "react-router-dom"


function Navbar() {

    const handleNav = () => {

        const cek  = document.querySelector('.check-nav')
        const navLink = document.querySelectorAll('.nav-link')

        for (let i = 0; i < navLink.length; i++) {
            if(cek.checked) {
                navLink[i].classList.remove('lg:hidden')
            } else {
                navLink[i].classList.add('lg:hidden')
            }
        }
    }

  return (
    <div className="navbar p-2 fixed bottom-0 w-full flex gap-1 justify-evenly items-center bg-cyan-300 shadow-2xl z-20 lg:fixed lg:top-15 lg:w-fit lg:h-fit lg:bg-white lg:border-cyan-300 lg:rounded-sm lg:border-[0.9px] lg:right-50">
        
        <NavLink to='/'>
          <div className="home nav-link p-2 lg:hidden cursor-pointer">
            <img src="src/assets/nav-icons/home.png" alt="home-icon"  className="w-10 hover:drop-shadow-xl"/>
          </div>
        </NavLink>

        <NavLink to='/certificate'>
          <div className="certificate nav-link p-2 lg:hidden cursor-pointer">
            <img src="src/assets/nav-icons/certificate.png" alt="certificate-icon"  className="w-10 hover:drop-shadow-xl "/>
          </div>
        </NavLink>

        
        <NavLink to='/education'>
          <div className="education nav-link p-2 lg:hidden cursor-pointer">
            <img src="src/assets/nav-icons/education.png" alt="education-icon"  className="w-10 hover:drop-shadow-xl"/>
          </div>
        </NavLink>

        <NavLink to='/projects'>
          <div className="project nav-link p-2 lg:hidden cursor-pointer">
            <img src="src/assets/nav-icons/project.png" alt="project-icon"  className="w-10 hover:drop-shadow-xl"/>
          </div>
        </NavLink>


        <NavLink to='/contact'>
          <div className="contact nav-link p-2 lg:hidden cursor-pointer">
            <img src="src/assets/nav-icons/contact.png" alt="contact-icon"  className="w-10 hover:drop-shadow-xl"/>
          </div>
        </NavLink>
          

          <div className="btn-nav hidden lg:block hamburger lg:w-5 lg:h-5" onClick={handleNav}>
            <input className="checkbox check-nav" type="checkbox" />
            <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
              <path
                className="lineTop line"
                strokeLinecap="round"
                strokeWidth="4"
                stroke="cyan"
                d="M6 11L44 11"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="4"
                stroke="black"
                d="M6 24H43"
                className="lineMid line"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="4"
                stroke="black"
                d="M6 37H43"
                className="lineBottom line"
              ></path>
            </svg>
          </div>

      </div>
  )
}

export default Navbar